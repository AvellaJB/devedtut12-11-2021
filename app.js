let tl = gsap.timeline({
    scrollTrigger: {
        trigger : ".front-page", 
        start : "0%", 
        end : "100%",
        markers : true,
        scrub : true,  
        pin : true,
    }
})

tl.fromTo(".front-page", {clipPath : 'circle(5%)'}, {clipPath : 'circle(100%)'}); 
tl.fromTo(".music-note", {scale : 0.5}, {scale: 0, opacity : 0});