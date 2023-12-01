// Use const or let to declare variables
const crsr = document.querySelector("#cursor");
const content = document.querySelector("#content");

// Use GSAP's recommended way of creating timelines
const tl = gsap.timeline();

// Function to set the cursor position
function moveCursor(event) {
    crsr.style.left = `${event.clientX}px`;
    crsr.style.top = `${event.clientY}px`;
}

// Event listener for mousemove
document.addEventListener("mousemove", moveCursor);

// Animation for the navbar
tl.from("#navbar", {
    y: '-10',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#navbar",
        start: "top 10%",
        end: "top 40%",
        scrub: 3
    }
});

// Animation for text elements
gsap.from(".text", {
    y: 50,
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".text",
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
});

// Animation for profile pictures
gsap.to(".pfp", {
    y: 50,
    opacity: 1,
    duration: 2,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".pfp",
        start: "top 40%",
        end: "top 20%",
        scrub: 3
    }
});

// Animation for page2
gsap.from(".page2", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2",
        start: "top -10%",
        end: "top 50%",
        scrub: 3
    }
});

// Listen for scroll events
document.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down slightly, hide content
    if (scrollTop > 80) {
        gsap.to("#content", { opacity: 0, duration: 0.3, ease: 'ease.inOut' });
    } else {
        // Scroll up, show content
        gsap.to("#content", { opacity: 1, duration: 0.3, ease: 'ease.inOut' });
    }

    // Check if scrolling down slightly, hide navbar
    if (scrollTop > 50) {
        gsap.to("#navbar", { y: '-100%', duration: 0.3, ease: 'ease.inOut' });
    } else {
        // Scroll up, show navbar
        gsap.to("#navbar", { y: '0', duration: 0.3, ease: 'ease.inOut' });
    }
});
