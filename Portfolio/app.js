const hero = document.querySelector('.hero');
const heroText = document.querySelector('.hero-text');
const icons = document.querySelectorAll('.skills-ic');
const img = document.querySelector('.copmany');
const slides = document.querySelectorAll('.slide');
const projects = document.querySelectorAll('.pro');
const sliders = document.querySelectorAll('.slider');
function animeslide() {
    
    let controller = new ScrollMagic.Controller();
    const nav = document.querySelector('header');
    
    slides.forEach(slide => {
        
        const tl = gsap.timeline({
            defaults: {
                duration: 1,
                ease: 'power2.inOut'
            }
        });
        
        tl.fromTo(heroText, {
            y: '500%'
        }, {
            y: '0%',
            ease: 'circ.out',
            duration: 1.5
        });
        tl.fromTo(img, {
            x: '-20%'
        }, {
            x: '0%'
        }, '-=0.7');
        tl.fromTo(nav, {
            y: '-100%'
        }, {
            y: '0%'
        }, '-=0.6');


        let scene = new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 0.7,
                reverse: false
            })
            .setTween(tl)
            
            .addTo(controller);
    });

    sliders.forEach(slider => {
        const sl = gsap.timeline();
        sl.fromTo(icons, {
            x: '-500%'
        }, {
            x: '0%',
            ease: "sine.out",
            duration: 1
        }, '-=0.9');
        let slScene = new ScrollMagic.Scene({
                triggerElement: slider,
                triggerHook: 0.5,
                reverse: false
            }).setTween(sl)
            .addTo(controller);
    });
   
    if (window.innerWidth > 1000) {
        projects.forEach((pro, index, slides) => {
            const pl = gsap.timeline();
            let nextSlide = projects.length - 1 === index ? 'end' : projects[index + 1];
            pl.fromTo(nextSlide, {
                y: '0%'
            }, {
                y: '40%'
            });
            pl.fromTo(pro, {
                opacity: 1,
                scale: 1
            }, {
                opacity: 0,
                scale: 0.5
            });
            pl.fromTo(nextSlide, {
                y: '40%'
            }, {
                y: '0%'
            }, '-=0.2');
            let plScene = new ScrollMagic.Scene({
                    triggerElement: pro,
                    triggerHook: 0.2,
                    duration: 900
                })
                .setPin(pro, {
                    pushFollowers: false
                })
                .setTween(pl)
                .addTo(controller);
        });
        
    }

}
animeslide(); 