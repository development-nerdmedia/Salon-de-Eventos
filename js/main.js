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
document.body.addEventListener("mousemove", e => {
    gsap.to(".ht-cursor2", {
        x: e.clientX,
        y: e.clientY,
    })
})

$("section.galery .slider3item .swiper-slide").hover(function () {
    $(".ht-cursor2").addClass("mostrar");
}, function () {
    $(".ht-cursor2").removeClass("mostrar");
});

$("section.ContentEvent .contentEventos .itemEvento").hover(function () {
    $(".ht-cursor").addClass("mostrar");
}, function () {
    $(".ht-cursor").removeClass("mostrar");
});

$("section.ultimosEventos .slider3item .swiper-slide").hover(function () {
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
                                document.querySelector(".serviciosHome .textoInfo p").innerHTML = textContent;
                            }
                        }, 200);
                    }

                    for (let y = 0; y < imgs.length; y++) {
                        imgs[y].classList.remove('select');
                        if (imgs[y].getAttribute("data-category") === categoria) {
                            imgs[y].classList.add('select');
                        }
                    }
                })
            })
            document.addEventListener("click", (e) => {
                if (e.target.closest("section.serviciosHome .containerText a")) {
                    var cat = document.querySelector(".containerText a span").textContent;
                    var catPage = cat.charAt(0).toUpperCase() + cat.slice(1);
                    sessionStorage.setItem('cat', catPage);
                }
            })
        }
    },
    slider2: {
        init: function () {
            var swiper = new Swiper(".slider3item", {
                slidesPerView: 3,
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
                breakpoints: {
                    '1441': {
                        spaceBetween: 42,
                    },
                    '1281': {
                        spaceBetween: 36,
                    },
                    '1025': {
                        spaceBetween: 31,
                    },
                    '769': {
                        slidesPerView: 3,
                        spaceBetween: 27,
                    },
                    '551': {
                        slidesPerView: 2,
                        spaceBetween: 27,
                    },
                    '375': {
                        slidesPerView: 1,
                        spaceBetween: 27,
                    },
                }
            });
        }
    },
    slider3: {
        init: function () {
            var swiper = new Swiper(".swiperPop", {
                noSwiping: true,
                noSwipingClass: 'swiper-slide',
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
    slider4: {
        init: function () {
            document.querySelector(".serviciosInterna .containerDetalles li").classList.add("select");

            const enlaces = document.querySelectorAll('.serviciosInterna .containerDetalles li');
            const tituloServicioInterna = document.querySelector('section.serviciosInterna .containerDetalles .info h3');
            const parrafosServiciosInterna = document.querySelectorAll('section.serviciosInterna .containerDetalles .info .textoP p');
            const imgsServiciosInterna = document.querySelectorAll('section.serviciosInterna .containerDetalles .info .images img');

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    var tituloPrincipal = evento.target.textContent;
                    var catPrincipal = evento.target.getAttribute("data-category");

                    tituloServicioInterna.classList.remove('select');

                    setTimeout(() => {
                        tituloServicioInterna.innerHTML = tituloPrincipal;
                        tituloServicioInterna.classList.add('select');
                    }, 100);

                    for (let y = 0; y < imgsServiciosInterna.length; y++) {
                        imgsServiciosInterna[y].classList.remove('select');
                        if (imgsServiciosInterna[y].getAttribute("data-category") === tituloPrincipal) {
                            imgsServiciosInterna[y].classList.add('select');
                        }
                    }


                    for (let i = 0; i < parrafosServiciosInterna.length; i++) {
                        document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").classList.remove('select');
                        setTimeout(() => {
                            if (parrafosServiciosInterna[i].getAttribute("data-category") === tituloPrincipal) {
                                document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").classList.add('select');
                                var textContent = parrafosServiciosInterna[i].innerHTML;
                                document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").innerHTML = textContent;
                            }
                        }, 100);
                    }
                })
            })

            $("#opcionesServicios").change(function () {
                var tituloPrincipalSelect = $("#opcionesServicios").val();

                tituloServicioInterna.classList.remove('select');

                setTimeout(() => {
                    tituloServicioInterna.innerHTML = tituloPrincipalSelect;
                    tituloServicioInterna.classList.add('select');
                }, 100);

                for (let y = 0; y < imgsServiciosInterna.length; y++) {
                    imgsServiciosInterna[y].classList.remove('select');
                    if (imgsServiciosInterna[y].getAttribute("data-category") === tituloPrincipalSelect) {
                        imgsServiciosInterna[y].classList.add('select');
                    }
                }

                for (let i = 0; i < parrafosServiciosInterna.length; i++) {
                    document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").classList.remove('select');
                    setTimeout(() => {
                        if (parrafosServiciosInterna[i].getAttribute("data-category") === tituloPrincipalSelect) {
                            document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").classList.add('select');
                            var textContent = parrafosServiciosInterna[i].innerHTML;
                            document.querySelector("section.serviciosInterna .containerDetalles .info .textInfo p").innerHTML = textContent;
                        }
                    }, 100);
                }

            });
        }
    },
    categoria: {
        init: function () {

            var catEx = sessionStorage.getItem('cat');

            if (catEx == "none") {
                document.querySelector("#categorias li").classList.add("select");
            }else{
                $("#opcionesEventos").val(`${catEx}`)
            }

            let listaTitle = [];
            const enlaces = document.querySelectorAll('#categorias li');

            for (let i = 0; i < enlaces.length; i++) {
                textoitem = enlaces[i].textContent;
                listaTitle.push(textoitem);
            }

            if (listaTitle.includes(catEx)) {
                for (let y = 0; y < enlaces.length; y++) {
                    if (catEx === enlaces[y].textContent) {
                        document.querySelector("#categorias li").classList.remove("select");
                        enlaces[y].classList.add('select')
                    }
                }
            }

            $('.itemEvento').hide();

            var categoryMain = document.querySelector('#categorias li.select').textContent;
            if (categoryMain === "Todos") {
                $(`.itemEvento`).show(0);
            } else {
                $(`.itemEvento[data-category="${categoryMain}"]`).show();
            }

            enlaces.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlaces.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                    var categoria = evento.target.innerHTML;
                    $(`.itemEvento`).not(`[data-category="${categoria}"]`).hide();
                    $(`.itemEvento[data-category="${categoria}"]`).show();
                    if (categoria === "Todos") {
                        $(`.itemEvento`).show();
                    }
                })
            })

            $("#opcionesEventos").change(function () {
                var eleccionPrincipalSelect = $("#opcionesEventos").val();
                $(`.itemEvento`).not(`[data-category="${eleccionPrincipalSelect}"]`).hide();
                $(`.itemEvento[data-category="${eleccionPrincipalSelect}"]`).show();
                if (eleccionPrincipalSelect === "Todos") {
                    $(`.itemEvento`).show();
                }
            })

        }
    },
    form: {
        init: function () {
            var formespacio = document.querySelectorAll('.form-group');
            var formespacioinput = document.querySelectorAll('.form-input');
            var formespacioselect = document.querySelectorAll('form select');

            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

            function inputcheck() {

                for (let i = 0; i < formespacioinput.length; i++) {
                    if (!formespacioinput[i].value) {
                        formespacioinput[i].parentElement.parentElement.classList.remove("ok");
                    } else {
                        formespacioinput[i].parentElement.parentElement.classList.add("ok");
                    }
                }
            }

            function validateInput(e) {
                for (let y = 0; y < formespacioinput.length; y++) {
                    if (!formespacioinput[y].value) {
                        formespacioinput[y].parentElement.parentElement.classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioinput[y].parentElement.parentElement.classList.remove("error");
                    }
                }
            }
            function validateSelect(e) {

                for (let i = 0; i < formespacioselect.length; i++) {
                    if (formespacioselect[i].value == "") {
                        formespacioselect[i].classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioselect[i].classList.remove("error");
                    }
                }
            }

            $('.form-input').on('change', () => {
                formespacioinput.forEach(element => {
                    if (!element.value == "") {
                        element.parentElement.parentElement.classList.add("ok");
                    } else {
                        element.parentElement.parentElement.classList.remove("ok");
                    }
                });
            });

            document.addEventListener("click", function (e) {
                if (e.target.closest(".form-input")) {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    })
                    e.target.parentElement.parentElement.classList.add("focusin");
                } else {
                    formespacio.forEach(function (shinyItem) {
                        shinyItem.classList.remove("focusin");
                    });
                }

                if (e.target.closest("form select")) {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.parentElement.parentElement.classList.remove("open");
                    })
                    e.target.parentElement.parentElement.parentElement.classList.add("open");
                } else {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.parentElement.parentElement.classList.remove("open");
                    });
                }


                inputcheck()

                if (e.target.closest("form button")) {

                    validateInput(e)

                    validateSelect(e)

                }
            })

            document.addEventListener("keydown", function (event) {
                if (event.keyCode == 9) {
                    for (let i = 0; i < formespacioinput.length; i++) {
                        formespacioinput[i].addEventListener('focusin', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.add('focusin');
                        });
                        formespacioinput[i].addEventListener('focusout', (event) => {
                            formespacioinput[i].parentElement.parentElement.classList.remove('focusin');
                            if (formespacioinput[i].value) {
                                formespacioinput[i].parentElement.parentElement.classList.add('ok');
                            }
                        });
                    }
                }
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

if ($('.ContentEvent').length > 0) {
    MyApp.categoria.init();
}

if ($('form').length > 0) {
    MyApp.form.init();
}

document.addEventListener("click", (e) => {
    if (e.target.closest(".containerGalery .slider3item .swiper-slide") || e.target.closest("section.galery .buttonFlecha")) {
        var titlePage = document.querySelector("section.banner h2").textContent;
        var textoEventoPop = document.querySelector("section.popUp .contenidoPopUp .info p")
        textoEventoPop.innerHTML = titlePage;
        document.body.classList.add("hide-scrolling");
        document.querySelector(".popUp").classList.add("mostrar");
        document.body.classList.add("hide-scrolling");

        setTimeout(() => {
            var indicadorVariable = document.querySelector("section.popUp .contenidoPopUp .sliderPopUp .swiperPop .swiper-pagination-fraction .swiper-pagination-current").textContent;
            var indicadorTotal = document.querySelector("section.popUp .contenidoPopUp .sliderPopUp .swiperPop .swiper-pagination-fraction .swiper-pagination-total").textContent;
            var indicadorVariablePop = document.querySelector("section.popUp .contenidoPopUp .info .newPaginacion span.current");
            var indicadorTotalPop = document.querySelector("section.popUp .contenidoPopUp .info .newPaginacion span.total");

            indicadorVariablePop.innerHTML = indicadorVariable;
            indicadorTotalPop.innerHTML = indicadorTotal;

        }, 100);
    }
    if (e.target.closest(".popUp .top")) {
        document.body.classList.remove("hide-scrolling");
        document.querySelector(".popUp").classList.remove("mostrar");
        // var contenedor = document.querySelector("section.popUp .contenidoPopUp .swiper .swiper-wrapper");
        // contenedor.innerHTML = '';
    }
    if (e.target.closest("header nav .navigation ul li")) {
        sessionStorage.setItem('cat', "none");
    }
    if (e.target.closest(".itemEvento")) {

        var sliderImgs = e.target.querySelectorAll(".infoPop .imgs img");
        var contenedor = document.querySelector("section.popUp .contenidoPopUp .swiper .swiper-wrapper");

        var textoCategoria = e.target.querySelector(".info span").textContent;
        var textoEvento = e.target.querySelector(".info p").textContent;

        var textoCategoriaPop = document.querySelector("section.popUp .contenidoPopUp .info span.category")
        var textoEventoPop = document.querySelector("section.popUp .contenidoPopUp .info p.name")


        textoCategoriaPop.innerHTML = textoCategoria;
        textoEventoPop.innerHTML = textoEvento;

        contenedor.innerHTML = '';

        for (let i = 0; i < sliderImgs.length; i++) {
            item2 = document.createElement("div");
            item2.setAttribute("class", "swiper-slide")
            item2.appendChild(sliderImgs[i])
            contenedor.appendChild(item2);
            itemfoto = document.createElement("img");
            itemfoto.setAttribute("src", sliderImgs[i].currentSrc);
            e.target.querySelector(".imgs").appendChild(itemfoto);
        }




        document.body.classList.add("hide-scrolling");
        document.querySelector(".popUp").classList.add("mostrar");

        setTimeout(() => {
            var indicadorVariable = document.querySelector("section.popUp .contenidoPopUp .sliderPopUp .swiperPop .swiper-pagination-fraction .swiper-pagination-current").textContent;
            var indicadorTotal = document.querySelector("section.popUp .contenidoPopUp .sliderPopUp .swiperPop .swiper-pagination-fraction .swiper-pagination-total").textContent;
            var indicadorVariablePop = document.querySelector("section.popUp .contenidoPopUp .info .newPaginacion span.current");
            var indicadorTotalPop = document.querySelector("section.popUp .contenidoPopUp .info .newPaginacion span.total");

            indicadorVariablePop.innerHTML = indicadorVariable;
            indicadorTotalPop.innerHTML = indicadorTotal;

        }, 100);
    }

    if (e.target.closest("section.popUp .contenidoPopUp .info .flechas .swiper-button-next") || e.target.closest("section.popUp .contenidoPopUp .info .flechas .swiper-button-prev")) {
        var indicadorVariable2 = document.querySelector("section.popUp .contenidoPopUp .sliderPopUp .swiperPop .swiper-pagination-fraction .swiper-pagination-current").textContent;
        var indicadorVariablePop2 = document.querySelector("section.popUp .contenidoPopUp .info .newPaginacion span.current");
        indicadorVariablePop2.innerHTML = indicadorVariable2;
    }

    if (e.target.closest("header nav .navigation ul li.menu-mobile img") || e.target.closest(".menuMovil .top .close")) {
        document.querySelector("section.menuMovil").classList.toggle("open");
    }
})