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

export function reinitAnimations() {
    if (typeof window === 'undefined') return
    requestAnimationFrame(() => {
        initDataAnimations()
        ScrollTrigger.refresh()
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

function getAnimateOptions(element) {
    const opts = {}
    if (element.dataset.animateDuration) opts.duration = parseFloat(element.dataset.animateDuration)
    if (element.dataset.animateEase) opts.ease = element.dataset.animateEase
    if (element.dataset.animateDelay) opts.delay = parseFloat(element.dataset.animateDelay)
    return opts
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

function isInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
}

function initDataAnimations() {
    document.querySelectorAll('[data-animate-group]').forEach(group => {
        if (group._gsapGroupHandled) return
        group._gsapGroupHandled = true

        const children = []
        group.querySelectorAll('[data-animate]').forEach(child => {
            if (child.closest('#js-header')) return
            if (child._gsapAnimated) return
            child._gsapAnimated = true
            child._groupTrigger = group
            children.push(child)
        })

    if (children.length === 0) return

    const stagger = parseFloat(group.getAttribute('data-animate-stagger')) || 0
    const immediate = isInViewport(group)

    const fireChildren = () => {
        children.forEach((child, i) => {
            const type = child.getAttribute('data-animate')
            if (stagger) {
                gsap.delayedCall(i * stagger, () => runChildAnimation(child, type, true))
            } else {
                runChildAnimation(child, type, true)
            }
        })
    }

    if (immediate) {
        fireChildren()
    } else {
        ScrollTrigger.create({
            trigger: group,
            start: 'top bottom',
            onEnter: fireChildren,
            once: true
        })
    }
    })

    document.querySelectorAll('[data-animate]').forEach(element => {
        if (element.closest('#js-header')) return
        if (element._gsapAnimated) return
        if (element.closest('[data-animate-group]')) return
        element._gsapAnimated = true

        const animateType = element.getAttribute('data-animate')
        const immediate = isInViewport(element)
        runChildAnimation(element, animateType, immediate)
    })
}

function runChildAnimation(element, type, immediate) {
    if (!type || type === 'data-animate' || type === 'fade') {
        animateElementFade(element, immediate)
    } else if (type === 'slide') {
        animateElementSlide(element, immediate)
    } else if (type === 'title') {
        animateElementTitle(element, immediate)
    } else if (type === 'text') {
        animateElementText(element, immediate)
    } else if (type === 'fill') {
        animateElementFill(element, immediate)
    } else if (type === 'counter') {
        animateElementCounter(element, immediate)
    }
}

function animateElementFade(element, immediate) {
    gsap.set(element, { autoAlpha: 0 })

    if (immediate) {
        gsap.to(element, {
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power1.out',
            onComplete: () => gsap.set(element, { clearProps: 'willChange' })
        })
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(element, {
                autoAlpha: 1,
                duration: 0.7,
                ease: 'power1.out',
                onComplete: () => gsap.set(element, { clearProps: 'willChange' })
            })
        },
        once: true
    })
}

function animateElementSlide(element, immediate) {
    const direction = element.getAttribute('data-animate-slide-direction') || 'left'
    const isFullScreen = element.hasAttribute('data-animate-full-screen') || element.closest('[data-animate-full-screen]') !== null

    let xFrom = 0, yFrom = 0
    if (direction === 'right') {
        xFrom = 85
    } else if (direction === 'left') {
        xFrom = -85
    } else if (direction === 'top') {
        yFrom = -85
    } else if (direction === 'bottom') {
        yFrom = 85
    }

    gsap.set(element, { x: xFrom, y: yFrom, autoAlpha: 0 })

    if (isFullScreen) {
        gsap.to(element, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.3,
            onComplete: () => gsap.set(element, { clearProps: 'willChange' })
        })
        return
    }

    if (immediate) {
        gsap.to(element, {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: 'power1.out',
            onComplete: () => gsap.set(element, { clearProps: 'willChange' })
        })
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.3,
                ease: 'power1.out',
                onComplete: () => gsap.set(element, { clearProps: 'willChange' })
            })
        },
        once: true
    })
}

function animateElementTitle(element, immediate) {
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
            charSpan.style.transform = 'translateY(-30%)'
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

    const animate = () => {
        gsap.to(allCharSpans, {
            y: '0%',
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.02,
            onComplete: () => {
                gsap.set(allCharSpans, { clearProps: 'willChange' })
            }
        })
    }

    if (immediate) {
        animate()
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: animate,
        once: true
    })
}

function animateElementText(element, immediate) {
    const text = element.textContent || ''
    if (!text.trim()) return

    if (element._textAnimated) return
    element._textAnimated = true

    const words = text.split(' ')
    const wordSpans = []

    element.textContent = ''

    words.forEach((word, i) => {
        const span = document.createElement('span')
        span.textContent = word
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(-30%)'
        element.appendChild(span)
        wordSpans.push(span)
        if (i < words.length - 1) {
            element.appendChild(document.createTextNode(' '))
        }
    })

    element.style.opacity = '1'

    const animate = () => {
        gsap.to(wordSpans, {
            y: '0%',
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.01,
            onComplete: () => {
                gsap.set(wordSpans, { clearProps: 'willChange' })
            }
        })
    }

    if (immediate) {
        animate()
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: animate,
        once: true
    })
}

function animateElementFill(element, immediate) {
    const direction = element.dataset.animateFillDirection || 'bottom'
    let clipStart = ''

    switch (direction) {
        case 'top':
            clipStart = 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
            break
        case 'right':
            clipStart = 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
            break
        case 'bottom':
            clipStart = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
            break
        case 'left':
            clipStart = 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
            break
    }

    gsap.set(element, { autoAlpha: 0, willChange: 'clip-path' })

    const animate = () => {
        gsap.timeline()
            .set(element, { autoAlpha: 1, clipPath: clipStart })
            .to(element, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 0.3,
                ease: 'power1.out',
                onComplete: () => gsap.set(element, { clearProps: 'willChange' })
            })
    }

    if (immediate) {
        animate()
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: animate,
        once: true
    })
}

function animateElementCounter(element, immediate) {
    const target = parseFloat(element.dataset.counterTarget) || 100
    const duration = parseFloat(element.dataset.animateDuration) || 2
    const obj = { val: 0 }

    gsap.set(element, { opacity: 0 })

    const animate = () => {
        gsap.to(element, { opacity: 1, duration: 0.3 })
        gsap.to(obj, {
            val: target,
            duration: duration,
            ease: 'power2.out',
            onUpdate: () => {
                element.textContent = Math.round(obj.val)
            }
        })
    }

    if (immediate) {
        animate()
        return
    }

    ScrollTrigger.create({
        trigger: element._groupTrigger || element,
        start: 'top bottom',
        onEnter: animate,
        once: true
    })
}

export function refreshAnimations() {
    ScrollTrigger.refresh()
}

export { gsap, ScrollTrigger }