import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis = null

export function initLenis() {
    if (lenis) return lenis

    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return lenis
}

export function getLenis() {
    return lenis
}

export function destroyLenis() {
    if (lenis) {
        lenis.destroy()
        lenis = null
    }
}

export function initAnimations() {
    if (typeof window === 'undefined') return

    ScrollTrigger.config({ ignoreMobileResize: true })

    requestAnimationFrame(() => {
        initHeaderAnimation()
        nextTick(() => {
            initDataAnimations()
            setTimeout(() => ScrollTrigger.refresh(), 300)
            finishStuckAnimations()
        })
    })
}

function finishStuckAnimations() {
    setTimeout(() => {
        document.querySelectorAll('[data-animate]').forEach((el) => {
            if (!el._gsapAnimated) return
            const x = Math.abs(gsap.getProperty(el, 'x'))
            const opacity = gsap.getProperty(el, 'opacity')
            if (x > 5 || opacity < 0.5) {
                gsap.to(el, { x: 0, opacity: 1, duration: 0.5, clearProps: 'transform' })
            }
        })
    }, 1500)
}

function nextTick(fn) {
    requestAnimationFrame(fn)
}

function initHeaderAnimation() {
    const header = document.querySelector('#js-header')
    if (!header) return

    const headerAnimatedElements = header.querySelectorAll('[data-animate]')

    headerAnimatedElements.forEach((element, index) => {
        gsap.fromTo(element,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', delay: index * 0.01 }
        )
    })
}

function initDataAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]')

    animatedElements.forEach((element) => {
        if (element.closest('#js-header')) return
        if (element._gsapAnimated) return
        element._gsapAnimated = true

        const animateType = element.getAttribute('data-animate')

        if (animateType === 'data-animate') {
            animateElementSlideUp(element)
        } else if (animateType === 'fade') {
            animateElementFade(element)
        } else if (animateType === 'slide') {
            animateElementSlide(element)
        } else if (animateType === 'title') {
            animateElementTitle(element)
        } else if (animateType === 'text') {
            animateElementText(element)
        }
    })
}

function animateElementSlideUp(element) {
    gsap.set(element, { y: 30, opacity: 0 })

    ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            })
        },
        once: true
    })
}

function animateElementFade(element) {
    gsap.set(element, { opacity: 0 })

    ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(element, {
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            })
        },
        once: true
    })
}

function animateElementSlide(element) {
    const direction = element.getAttribute('data-animate-slide-direction') || 'left'
    const isFullScreen = element.hasAttribute('data-animate-full-screen') || element.closest('[data-animate-full-screen]') !== null

    let xFrom = 0
    if (direction === 'right') {
        xFrom = 85
    } else if (direction === 'left') {
        xFrom = -85
    }

    gsap.set(element, { x: xFrom, opacity: 0 })

    if (isFullScreen) {
        gsap.to(element, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3
        })
    } else {
        ScrollTrigger.create({
            trigger: element,
            start: 'top bottom',
            onEnter: () => {
                gsap.to(element, {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out'
                })
            },
            once: true
        })
    }
}

function animateElementTitle(element) {
    const originalText = element.textContent || ''
    if (!originalText.trim()) return

    if (element._titleAnimated) return
    element._titleAnimated = true

    element.style.visibility = 'hidden'

    element.innerHTML = ''

    const wrapper = document.createElement('span')
    wrapper.style.display = 'flex'
    wrapper.style.flexWrap = 'wrap'
    wrapper.style.overflow = 'hidden'
    wrapper.style.alignItems = 'baseline'

    const words = originalText.split(' ')
    const allCharSpans = []

    words.forEach((word, wordIndex) => {
        const wordWrapper = document.createElement('span')
        wordWrapper.style.display = 'inline-block'
        wordWrapper.style.overflow = 'hidden'
        wordWrapper.style.whiteSpace = 'nowrap'
        wordWrapper.style.lineHeight = '1.2'

        const chars = word.split('')
        chars.forEach(char => {
            const charSpan = document.createElement('span')
            charSpan.textContent = char
            charSpan.style.display = 'inline-block'
            charSpan.style.transform = 'translateY(-45%)'
            charSpan.style.opacity = '0'
            charSpan.style.visibility = 'visible'
            wordWrapper.appendChild(charSpan)
            allCharSpans.push(charSpan)
        })

        wrapper.appendChild(wordWrapper)

        if (wordIndex < words.length - 1) {
            const space = document.createElement('span')
            space.style.display = 'inline'
            space.style.width = '0.3em'
            space.style.visibility = 'visible'
            wrapper.appendChild(space)
        }
    })



    element.style.display = 'block'
    element.style.overflow = 'hidden'
    element.appendChild(wrapper)
    element.style.visibility = 'visible'

    ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(allCharSpans, {
                y: '0%',
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
                stagger: 0.025,
                delay: 0.1
            })
        },
        once: true
    })
}

function animateElementText(element) {
    gsap.set(element, { y: 30, opacity: 0 })

    ScrollTrigger.create({
        trigger: element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.1,
                ease: 'power2.out'
            })
        },
        once: true
    })
}

export function refreshAnimations() {
    ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger }