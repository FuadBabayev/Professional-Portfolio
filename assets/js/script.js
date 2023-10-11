// Multiple Text Animation Part Start
const text = document.querySelector('.second-text');
const textLoad = () => {
    setTimeout(()=>{
        text.textContent = "Frontend Developer.";
    },0)
    setTimeout(()=>{
        text.textContent = "Freelancer.";
    },4000)
    setTimeout(()=>{
        text.textContent = "Mentor.";
    },8000)
}
textLoad();
setInterval(textLoad, 12000);
// Multiple Text Animation Part End


// Zoom-in and Zoom-out Section Start
$(function(){
    $("#backgroundShow").css({
        "display" : "none",
        "width" : "100vw",
        "height" : "100vh",
        "justify-content" : "center",
        "align-items" : "center",
        "background-repeat" : "no-repeat",
        "background-position" : "center",
        "background-color" : "rgba(0,0,0, 0.9)",
        "background-size" : "50%",
        "position" : "fixed",
        "cursor" : "zoom-out",
        "z-index" : 6,
        "top" : "50%",
        "left" : "50%",
        "transform" : "translate(-50%, -50%)",
    });    

    $(".img").on("click", function(){
        let src = $(this).attr("src");
        $("#backgroundShow").css({
            "display" : "flex",
            "background-image" : `url('${src}')`,
        })
        
    })
    $("#backgroundShow").on("click",function(){
        $(this).css({
            "display":"none",
        })
    })

})
// Zoom-in and Zoom-out Section Start


// Scroll Reveal Animation Part Start
const scroll = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
});

// Scroll Home
scroll.reveal('.prolog',{interval: 100}); 
scroll.reveal('.home-part2',{interval: 200}); 
scroll.reveal('.name',{interval: 300}); 
scroll.reveal('.text',{delay: 200}); 
scroll.reveal('.home-part1-icons',{interval: 300});
scroll.reveal('.home-part1-buttons',{interval: 400});

// Scroll About
scroll.reveal('.about-header',{interval: 100}); 
scroll.reveal('.about-part1',{interval: 200}); 
scroll.reveal('.about-part2',{interval: 300}); 
scroll.reveal('.about-part2 h1',{delay: 300}); 
scroll.reveal('.about-part2 p',{interval: 400});

// Scroll Skills
scroll.reveal('.skills-data:nth-child(1)', {delay: 100});
scroll.reveal('.skills-data:nth-child(2)', {delay: 170});
scroll.reveal('.skills-data:nth-child(3)', {delay: 250});
scroll.reveal('.skills-data:nth-child(4)', {delay: 315});
scroll.reveal('.skills-data:nth-child(5)', {delay: 400});
scroll.reveal('.skills-data:nth-child(6)', {delay: 470}); 
scroll.reveal('.skills-data:nth-child(7)', {delay: 550});
scroll.reveal('.skills-part2', {delay : 500})

// Scroll Project
scroll.reveal('.project-header', {delay: 0});
scroll.reveal('.project-part1 img', {delay: 100});
scroll.reveal('.project-part2 h1', {delay: 200});
scroll.reveal('.project-part2 p', {delay: 300});

// Scroll Work
scroll.reveal('.work-header', {delay: 0});
scroll.reveal('.work-img:nth-child(1)', {delay: 0});
scroll.reveal('.work-img:nth-child(2)', {delay: 100});
scroll.reveal('.work-img:nth-child(3)', {delay: 200});
scroll.reveal('.work-img:nth-child(4)', {delay: 300});
scroll.reveal('.work-img:nth-child(5)', {delay: 400});
scroll.reveal('.work-img:nth-child(6)', {delay: 500});

// Scroll Contact
scroll.reveal('.contact-header', {delay: 0});
scroll.reveal('.registration-input:nth-child(1)', {delay: 0});
scroll.reveal('.registration-input:nth-child(2)', {delay: 100});
scroll.reveal('.registration-input:nth-child(3)', {delay: 200});
scroll.reveal('.registration-input:nth-child(4)', {delay: 300});
scroll.reveal('.registration-button', {delay: 400});
// Scroll Reveal Animation Part End


// Password Show&Hide Part Start
let showIcon = document.getElementById('icon-button');
let showInput = document.getElementById('password');
showIcon.addEventListener('click', ()=>{
    if(showInput.type == "password"){
        showInput.type = "text";
        showIcon.innerHTML = `<i class="fas fa-eye-slash"></i>`;
    } else {
        showInput.type = "password";
        showIcon.innerHTML = `<i class="fas fa-eye"></i>`;
    }
})
// Password Show&Hide Part End


/* Scroll to Top Section Start */
let topButton = document.getElementById("myBtn");
window.addEventListener('scroll', ()=>{
if (window.pageYOffset > 300 || document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 || window.onscroll > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
})
topButton.addEventListener('click', ()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
/* Scroll to Top Section End */

// Responsive Navbar Section Start
let cancelIcon = document.querySelector(".cancel-logo i");
let barIcon = document.querySelector('.responsive-bar');
let responsiveSection = document.querySelector('.responsive');
let responsiveDiv = document.querySelectorAll('.responsive-menu a');
responsiveDiv.forEach(element => {
    element.addEventListener('click', ()=>{
        responsiveSection.style.right = "-200px"; 
    })
});
cancelIcon.addEventListener('click', ()=>{
    responsiveSection.style.right = "-200px";
})
barIcon.addEventListener('click', ()=>{
    responsiveSection.style.right = 0;
})
// Responsive Navbar Section End