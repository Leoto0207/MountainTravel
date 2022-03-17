const header = document.querySelector('header');
const sectionOne = document.querySelector('#hero');
const alinks = document.querySelectorAll('#header-link');

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function(
    entries, 
    sectionOneObserver
    ){
        entries.forEach((entry)=>{
            if(!entry.isIntersecting){
                header.classList.add('nav-scrolled');
                for(let alink of alinks){
                    alink.classList.add("headerText");
                }
            }else{
                header.classList.remove('nav-scrolled');
                for(let alink of alinks){
                    alink.classList.remove("headerText");
                }
            }
        });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);