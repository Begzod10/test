$(document).ready(function() {
    $('.promo_inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../../../../../HTML%20lessons/Projects/Project-3/src/icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../../../../../HTML%20lessons/Projects/Project-3/src/icons/right.svg" alt=""></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Menu

    let hamburger = document.querySelector('.promo__hamburger'),
        menu = document.querySelector('.menu'),
        img = document.querySelector('.promo__hamburger_img'),
        img2 = document.querySelector('.promo__hamburger_img2');

    hamburger.addEventListener('click',()=>{
        if (img.style.display === "none"){
            img.style.display = "block";
            img2.style.display = "none";

        }else {
            img.style.display = "none";
            img2.style.display = "block";
        }

        menu.classList.toggle('menu__active');
    })

    //Event
    const more_link = document.querySelectorAll('.more_link'),
        more_back_link = document.querySelectorAll('.more_back_link');
    for (let i = 0; i<more_link.length;i++){
        more_link[i].addEventListener('click',()=>{
            document.querySelectorAll('.events__item_list')[i].classList.toggle('events__item_list_active');
            document.querySelectorAll('.events__item_list1')[i].classList.toggle('events__item_list1_active');
        })
    }
    for (let i = 0; i<more_back_link.length;i++){
        more_back_link[i].addEventListener('click',()=>{
            document.querySelectorAll('.events__item_list')[i].classList.remove('events__item_list_active');
            document.querySelectorAll('.events__item_list1')[i].classList.toggle('events__item_list1_active');
        })
    }

    // Modal
    let team__item = document.querySelectorAll('.team__item'),
        person = document.querySelector('#person'),
        modal__person_img = document.querySelector('.modal__person_img img'),
        modal__person_name = document.querySelector('.modal__person_name'),
        modal__close = person.querySelector('.modal__close');
    for (let i = 0; i<team__item.length;i++){
        team__item[i].addEventListener('click',()=>{
            modal__person_img.src = document.querySelectorAll('.profile_img')[i].src;
            console.log(document.querySelectorAll('.profile_img')[i].src)
            modal__person_name.innerHTML = document.getElementsByClassName('team__item_name')[i].innerHTML;
            person.style.display = "flex";
        })
    }
    modal__close.addEventListener('click',()=>{
        person.style.display = "none";
    })

    new WOW().init();

})