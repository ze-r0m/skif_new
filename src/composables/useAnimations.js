import Lenis from 'lenis'
import gsap from 'gsap'

let lenis = null
let animationsObserver = null
let tickerCallback = null
let scrollHandler = null

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

    tickerCallback = (time) => {
        lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCallback)

    gsap.ticker.lagSmoothing(500)

    return lenis
}

export function getLenis() {
    return lenis
}

export function destroyLenis() {
    if (lenis) {
        if (tickerCallback) {
            gsap.ticker.remove(tickerCallback)
            tickerCallback = null
        }
        if (scrollHandler) {
            lenis.off('scroll', scrollHandler)
            scrollHandler = null
        }
        lenis.destroy()
        lenis = null
    }
    if (animationsObserver) {
        animationsObserver.disconnect()
        animationsObserver = null
    }
}

export function initAnimations() {
    if (typeof window === 'undefined') return

    requestAnimationFrame(() => {
        initHeaderAnimation()
        nextTick(() => {
            initDataAnimations()
            finishStuckAnimations()
        })
    })
}

function finishStuckAnimations() {
    const fixStuck = () => {
        document.querySelectorAll('[data-animate]').forEach((el) => {
            if (!el._gsapAnimated || el._done) return
            const x = Math.abs(gsap.getProperty(el, 'x'))
            const opacity = gsap.getProperty(el, 'opacity')
            if (x > 5 || opacity < 0.5) {
                gsap.to(el, { x: 0, opacity: 1, duration: 0.5 })
            }
        })
    }

    setTimeout(fixStuck, 3000)

    if (lenis) {
        scrollHandler = () => {
            if (!lenis.isScrolling) fixStuck()
        }
        lenis.on('scroll', scrollHandler)
    }
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

function isInViewport(el) {
    const rect = el.getBoundingClientRect()
    return rect.top < window.innerHeight && rect.bottom > 0
}

function initDataAnimations() {
    animationsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return
            const el = entry.target
            animationsObserver.unobserve(el)

            if (el._animateChildren) {
                const children = el._animateChildren
                const stagger = parseFloat(el.getAttribute('data-animate-stagger')) || 0
                children.forEach((child, i) => {
                    const type = child.getAttribute('data-animate')
                    if (stagger) {
                        gsap.delayedCall(i * stagger, () => runChildAnimation(child, type))
                    } else {
                        runChildAnimation(child, type)
                    }
                })
            } else {
                const type = el.getAttribute('data-animate')
                runChildAnimation(el, type)
            }
        })
    }, { rootMargin: '0px 0px 200px 0px' })

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

        if (immediate) {
            children.forEach((child, i) => {
                const type = child.getAttribute('data-animate')
                if (stagger) {
                    gsap.delayedCall(i * stagger, () => runChildAnimation(child, type))
                } else {
                    runChildAnimation(child, type)
                }
            })
        } else {
            group._animateChildren = children
            animationsObserver.observe(group)
        }
    })

    document.querySelectorAll('[data-animate]').forEach(element => {
        if (element.closest('#js-header')) return
        if (element._gsapAnimated) return
        if (element.closest('[data-animate-group]')) return
        element._gsapAnimated = true

        const animateType = element.getAttribute('data-animate')
        const immediate = isInViewport(element)
        if (immediate) {
            runChildAnimation(element, animateType)
        } else {
            animationsObserver.observe(element)
        }
    })
}

function runChildAnimation(element, type) {
    if (!type || type === 'data-animate' || type === 'fade') {
        animateElementFade(element)
    } else if (type === 'slide') {
        animateElementSlide(element)
    } else if (type === 'title') {
        animateElementTitle(element)
    } else if (type === 'text') {
        animateElementText(element)
    } else if (type === 'fill') {
        animateElementFill(element)
    }
}

function animateElementFade(element) {
    gsap.set(element, { autoAlpha: 0 })
    gsap.to(element, {
        autoAlpha: 1,
        duration: 0.7,
        ease: 'power1.out',
        onComplete: () => {
            element._done = true
            gsap.set(element, { clearProps: 'willChange' })
        }
    })
}

function animateElementSlide(element) {
    const direction = element.getAttribute('data-animate-slide-direction') || 'left'

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

    gsap.to(element, {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
            element._done = true
            gsap.set(element, { clearProps: 'willChange' })
        }
    })
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
    wrapper.style.columnGap = '0.3em'

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
    })

    element.style.display = 'block'
    element.style.overflow = 'hidden'
    element.appendChild(wrapper)
    element.style.visibility = 'visible'

    gsap.to(allCharSpans, {
        y: '0%',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.02,
        onComplete: () => {
            element._done = true
            gsap.set(allCharSpans, { clearProps: 'willChange' })
        }
    })
}

function animateElementText(element) {
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

    gsap.to(wordSpans, {
        y: '0%',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        stagger: 0.01,
        onComplete: () => {
            element._done = true
            gsap.set(wordSpans, { clearProps: 'willChange' })
        }
    })
}

function animateElementFill(element) {
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

    gsap.timeline()
        .set(element, { autoAlpha: 1, clipPath: clipStart })
        .to(element, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 0.3,
            ease: 'power1.out',
            onComplete: () => {
                element._done = true
                gsap.set(element, { clearProps: 'willChange' })
            }
        })
}



