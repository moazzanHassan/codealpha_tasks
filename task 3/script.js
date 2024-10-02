var menu = document.querySelector("#nav i");
var close = document.querySelector("#sidebar i");

var faceContainer = document.querySelector("#section1 .sec1-p2");
var face = document.querySelector("#section1 .sec1-p2 img");
var tl = gsap.timeline();

tl.to("#sidebar",{
    right:"0%"
})
tl.from("#sidebar h4",{
    x:150,
    stagger:.4,
    opacity:0
})
tl.from("#sidebar i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
close.addEventListener("click",function(){
    tl.reverse()
})



// Add a mousemove event listener to the face container
faceContainer.addEventListener("mousemove", function(event) {
    // Get the dimensions of the face container
    var rect = faceContainer.getBoundingClientRect();

    // Calculate the center position of the face container
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;

    // Calculate the mouse position relative to the center of the container
    var mouseX = event.clientX - centerX;
    var mouseY = event.clientY - centerY;

    // Calculate the movement for the face image (opposite direction)
    var moveX = mouseX / 10; // Adjust the divisor to change the sensitivity
    var moveY = mouseY / 10; // Adjust the divisor to change the sensitivity

    // Apply the transformation to the face image
    face.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});

// Reset face position when the mouse leaves the container
faceContainer.addEventListener("mouseleave", function() {
    face.style.transform = "translate(0, 0)";
});
