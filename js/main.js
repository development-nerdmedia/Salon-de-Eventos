AOS.init();

window.addEventListener("scroll", function () {
    if (this.pageYOffset > 60) {
        document.querySelector("header").classList.add("sticky");
    }
    else {
        document.querySelector("header").classList.remove("sticky");
    }
});

document.body.addEventListener("mousemove", e => {
    gsap.to(".ht-cursor", {
        x: e.clientX,
        y: e.clientY,
    })
})

$(".slider3item .swiper-slide").hover(function () {
    $(".ht-cursor").addClass("mostrar");
  }, function () {
    $(".ht-cursor").removeClass("mostrar");
  });

MyApp = {
    slider1: {
        init: function () {
            document.querySelector(".containerText ul li").classList.add("select");

            let listaTitle = [];
            const enlaces = document.querySelectorAll('.containerText ul li');
            const parrafos = document.querySelectorAll('.containerText .textoP span');
            const imgs = document.querySelectorAll('.contentimgWrapper .Contentimg img');

            for (let i = 0; i < enlaces.length; i++) {
              textoitem = enlaces[i].textContent;
              listaTitle.push(textoitem);
            }

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    var categoria = evento.target.innerHTML;

                    document.querySelector(".containerText a span").innerHTML = categoria.toLowerCase();

                    for (let i = 0; i < parrafos.length; i++) {
                        document.querySelector(".serviciosHome .textoInfo p").classList.remove('select');
                        setTimeout(() => {
                            if (parrafos[i].getAttribute("data-category") === categoria) {
                                document.querySelector(".serviciosHome .textoInfo p").classList.add('select');
                                var textContent = parrafos[i].innerHTML;
                                document.querySelector(".serviciosHome .textoInfo p").innerHTML=textContent;
                            }                            
                        }, 100);
                    }
                    for (let y = 0; y < imgs.length; y++) {
                        imgs[y].classList.remove('select');
                        if (imgs[y].getAttribute("data-category") === categoria) {
                            imgs[y].classList.add('select');
                        }
                    }
                  })
            })
        }
    },
    slider2: {
        init: function () {
            var swiper = new Swiper(".slider3item", {
                slidesPerView: 3,
                spaceBetween: 42,
                loop: true,
                noSwiping: true,
                noSwipingClass: 'swiper-slide',
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                autoplay: {
                    delay: 3500,
                  },
              });
        }
    },
    slider3:{
        init: function () {
            var swiper = new Swiper(".swiperPop", {
                pagination: {
                  el: ".swiper-pagination",
                  type: "fraction",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
        }
    },
    slider4:{
        init: function () {
            document.querySelector(".serviciosInterna .containerDetalles li").classList.add("select");

            let listaTitle = [];
            const enlaces = document.querySelectorAll('.serviciosInterna .containerDetalles li');

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                })
            })
        }
    }
}

if ($('.containerText ul').length > 0) {
    MyApp.slider1.init();
}

if ($('.slider3item').length > 0) {
    MyApp.slider2.init();
}
if ($('.swiperPop').length > 0) {
    MyApp.slider3.init();
}
if ($('.serviciosInterna').length > 0) {
    MyApp.slider4.init();
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".containerGalery .slider3item .swiper-slide")) {
      document.body.classList.add("hide-scrolling");
      document.querySelector(".popUp").classList.add("mostrar");
    }
    if (e.target.closest(".popUp .top")) {
        document.body.classList.remove("hide-scrolling");
        document.querySelector(".popUp").classList.remove("mostrar");
    }
})