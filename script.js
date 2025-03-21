gsap.to("#page1 #box",{
    rotate:360,
    scale:1,
    duration:1,
    delay:1
})

gsap.to("#page2 #box2",{
    rotate:360,
    scale:1,
    duration:1,
    delay:1,
    scrollTrigger:"#page2 #box2"
})

gsap.to("#page3 #box3",{
    rotate:360,
    scale:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #box3",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})