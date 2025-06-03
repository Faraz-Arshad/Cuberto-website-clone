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


// Replace your existing ScrollTrigger code with this updated version

gsap.to(".fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
        onUpdate: function(self) {
            // Calculate which image should be active based on scroll progress
            const progress = self.progress;
            const totalImages = 4; // You have 4 images
            const activeIndex = Math.floor(progress * totalImages);
            
            // Update images
            updateActiveImage(activeIndex);
        }
    },
    y: "-300%",
    ease: "none" // Changed from Power1 to "none" for smoother scrub
});

// Function to update active image
function updateActiveImage(activeIndex) {
    const images = document.querySelectorAll('#fright .images img');
    
    images.forEach((img, index) => {
        img.classList.remove('active', 'prev');
        
        if (index === activeIndex) {
            img.classList.add('active');
        } else if (index < activeIndex) {
            img.classList.add('prev');
        }
    });
}

// Initialize first image as active
document.addEventListener('DOMContentLoaded', function() {
    updateActiveImage(0);
});

// Your existing Shery.js code (keeping it for additional effects if needed)
let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index) {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress + index);
                }
            });
        });
    },
});