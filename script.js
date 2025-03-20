var tl = gsap.timeline()

tl.from("h2",{
    y:-10,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.5
})

tl.from("ul",{
    y:-10,
    opacity:0,
    duration:1,
    delay:1,
    stagger:1.5
})

tl.from("h1",{
    y:-10,
    opacity:0,
    duration:1,
    delay:1,
    stagger:2.5
})