//
// Anchors
//

let headerHeight;

const mq = window.matchMedia('(max-width: 992px)');

if (mq.matches) {
    headerHeight = document.querySelector('.header').clientHeight + document.querySelector('.anchors').clientHeight; 
} else {
    headerHeight = document.querySelector('.anchors').clientHeight; 
}

function activeAnchor () {
    let sectionAnchor = document.querySelectorAll('.section-anchor');

    for (let i = 0; i < sectionAnchor.length; i++) { 
        document.querySelector('.anchors__nav-link[href="#' + sectionAnchor[i].id + '"]').className=((1 >= sectionAnchor[i].getBoundingClientRect().top - (headerHeight + 24) && sectionAnchor[i].getBoundingClientRect().top - (headerHeight + 24) >= 1-sectionAnchor[i].offsetHeight) ? 'anchors__nav-link is-current' : 'anchors__nav-link');
    }
}

window.addEventListener('scroll', activeAnchor, false);
window.addEventListener('load', activeAnchor, false);

let anchorsElem = document.querySelectorAll('.anchors__nav-link');

for (let anchor of anchorsElem) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let scrollDistance = window.scrollY;
        
        const element = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: element.offsetTop - headerHeight - 24,
            behavior: "smooth"
        });
    })
}