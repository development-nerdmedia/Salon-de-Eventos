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
            // console.log(categoria);
        }
    },
}

if ($('.containerText ul').length > 0) {
    MyApp.slider1.init();
}