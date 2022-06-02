$(document).ready(function () {
   const blockbar = document.querySelector('.block-bar');
   const BoxMenu = document.querySelector('.box-menu');
   const backgroundMenu = document.querySelector('.background-menu');

   blockbar.onclick = function () {
      backgroundMenu.classList.add('ativo');
      BoxMenu.classList.add('ativo');
   };

   backgroundMenu.onclick = function () {
      backgroundMenu.classList.remove('ativo');
      BoxMenu.classList.remove('ativo');
   };

   const list = document.querySelector('.dropbtn')
   const listar = document.querySelector('.dropdown-filtrar')

   list.onclick = function () {
      listar.classList.toggle('ativo');
   };

   const listInterna = document.querySelector('.dropdown-interno')

   listInterna.onclick = function () {
      listInterna.classList.toggle('ativo');
   };

   $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".dropdown-menu li").filter(function () {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });

   if ($('.cep-mask').length > 0) {
      $('.cep-mask').mask('99.999-999');
   }

   if ($('.date-mask').length > 0) {
      $('.date-mask').mask('99/99/9999');
   }

   if ($('.number-mask').length > 0) {
      $('.number-mask').mask('99999');
   }

   if ($('.cvv-mask').length > 0) {
      $('.cvv-mask').mask('999');
   }

   if ($('.cpf-mask').length > 0) {
      $('.cpf-mask').mask('999.999.999-99');
   }

   if ($('.phone-mask').length > 0) {
      $('.phone-mask').mask(SPMaskBehavior, spOptions);
   }
});

$('.owl-banner').owlCarousel({
   loop: true,
   margin: 0,
   nav: false,
   items: 1,
})

$('.owl-tintas').owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   items: 2,
   responsive: {
      0: {
         items: 1,
         margin: 0,
      },
      600: {
         items: 2,
         margin: 15,
      }
   }
})

$('.owl-dicas').owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   items: 2,
   responsive: {
      0: {
         items: 1,
      },
      769: {
         items: 2,
         margin: 15,
      }
   }
})

$('.owl-produtos').owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   items: 1,
})

let objetoQueSeraPintado = "";
let tab = "";

function handleColor(color) {
   document
      .querySelector(`.${objetoQueSeraPintado}`)
      .style.setProperty("fill", color, "important");

   document.querySelector("#corSelecionada .text").innerHTML = color
   document.querySelector("#corSelecionada .ball-color").style.backgroundColor = color
}

function handleColorTab(tabSelecionado) {
   const tabs = document.getElementsByClassName("tab-content");

   for (const tab of tabs) {
      tab.style.display = "none";
   }

   document.getElementById(tabSelecionado).style.display = "block";
}

function handle_click_event(obj) {
   document.querySelector("#colors").style.display = "block";
   objetoQueSeraPintado = obj.classList[0];

   document.querySelector("#objetoSelecionado").innerHTML = obj.classList[0]
}