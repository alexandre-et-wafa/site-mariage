const sections = document.querySelectorAll(".page-section"); 
const navDots = document.querySelectorAll(".nav-dot"); 
const observer = new IntersectionObserver(
    function (entries) { 
        entries.forEach(function (entry) { 
            if (entry.isIntersecting) { 
                navDots.forEach(function (dot) { 
                    dot.classList.remove("active"); 
                }); 
                const activeDot = document.querySelector('.nav-dot[href="#' + entry.target.id + '"]'); 
                if (activeDot) { 
                    activeDot.classList.add("active"); 
                } 
            } 
        }); 
    }, 
    { 
        threshold: 0.6 
    }
); 
    
sections.forEach(function (section) { 
    observer.observe(section); 
}); 