
const body = document.querySelector("body")
const loading = document.querySelector(".loading")
let tl = gsap.timeline()


tl.set(loading, { display: "block"})
tl.set(body, { overflow: "hidden" })


tl.to(".loading",{
  opacity:0,
  duration: 3,
  ease: "power2.inOut"
})
tl.set(body, { overflowY: "scroll" })
tl.set(loading, { display: "none"})
tl.from(".nav",{
  opacity:0,
  y:-20,
  duration: 1.5,
  ease: "power2.inOut"
})
tl.from(".title",{
  opacity:0,
  y:-20,
  duration: 0.9,
  ease: "power2.inOut"
})
tl.from(".text",{
  opacity:0,
  y:-20,
  duration: 0.9,
  ease: "power2.inOut"
})
tl.to(".mask",{
  height:0,
  duration: 2,
  ease: "power2.inOut"
})
