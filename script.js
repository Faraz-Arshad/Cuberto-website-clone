Shery.mouseFollower();
Shery.makeMagnet(".magnet");

function homeVideo (){
    document.addEventListener('DOMContentLoaded', function() {
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.hvr');
        
        // Initialize GSAP and hide cursor initially
        gsap.set(cursor, {
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0,
            backgroundColor: "transparent"
        });
        
        // Variables for cursor position
        let xTo = gsap.quickTo(cursor, "x", {duration: 0.3, ease: "power3"}),
            yTo = gsap.quickTo(cursor, "y", {duration: 0.3, ease: "power3"});
        
        // Move cursor with mouse
        document.addEventListener('mousemove', function(e) {
            xTo(e.clientX);
            yTo(e.clientY);
        });
        
        // Handle hover effects on .hvr elements
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                // Show and scale up cursor on hover with fluid animation
                gsap.to(cursor, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out" // Smooth, fluid animation
                });
            });
            
            element.addEventListener('mouseleave', function() {
                // Hide cursor when not hovering
                gsap.to(cursor, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.in" // Smooth exit animation
                });
            });
        });
    });
} 
homeVideo()


gsap.to (".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: ".start top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
       sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function(prog){
               setScroll(prog.progress+index)
            }
        })
       })
    },
  }); 