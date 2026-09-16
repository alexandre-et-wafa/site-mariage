const sections = document.querySelectorAll(".page-section");
const navDots = document.querySelectorAll(".nav-dot");

function updateActiveSection(){
    const screenCenter = window.innerHeight/2;
    const closestSection = null;
    const closestDistance = Infinity;

    sections.forEach(function(section){
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + (rect.height/2);
        const distance = Math.abs(screenCenter - sectionCenter);
        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        }
    })

    if (!closestSection) {
        return;
    }

    navDots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    const activeDot = document.querySelector(`.nav-dot[href="#${closestSection.id}"]`);

    if (activeDot) {
        activeDot.classList.add("active");
    }
    else console.log("false");

}


const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) { 
                return; 
            }
            navDots.forEach(function (dot) {
                dot.classList.remove("active");
            });
            const activeDot = document.querySelector('.nav-dot[href="#' + entry.target.id + '"]');
            if (activeDot) {
                activeDot.classList.add("active");
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