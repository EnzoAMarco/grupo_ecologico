// const articleProductsBoxesContainer = document.querySelector('.article_products_boxes_container');
// const asideMenu = document.querySelector('.aside_animation');
// const headerColor = document.querySelector('.headerFont');
// const section = document.querySelector('.grid_1_i2');
// const listAside = document.querySelector('.list_aside');
// const formulario_about = document.querySelector('.formulario');

// let menuOpen = false;
// asideSymbol.addEventListener('click', ()=> {
//   console.log('click');
//   if (!menuOpen) {
//     menuOpen = true ;
//     listAside.classList.add('list_a_n');
//     section.classList.add('section_hide');
//     asideSymbol.classList.add('open');
//     asideMenu.classList.add('aside_open');
//     headerColor.classList.add('textBlack');
//     formulario_about.classList.add('formulario_hide');
//   } else {
//     menuOpen = false;
//     listAside.classList.remove('list_a_n');
//     asideSymbol.classList.remove('open');
//     asideMenu.classList.remove('aside_open');
//     headerColor.classList.remove('textBlack');
//     section.classList.remove('section_hide');
//     formulario_about.classList.remove('formulario_hide');
//   }
// });


// -PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS-
// -PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS-


let productos = [
  {
    id:'agendas',
    producto:'Agendas',
    precio:30,
    css:'article_products_boxes_container_img_agendas',
  },
  {
    id:'bolsas',
    producto:'Bolsas boutique',
    precio:50,
    css:'article_products_boxes_container_img_bolsas',
  },
  {
    id:'cuadernos',
    producto:'Cuadernos',
    precio:20,
    css:'article_products_boxes_container_img_cuadernos',
  },
  {
  id:'folletos',
  producto:'Folletos',
  precio:80,
  css:'article_products_boxes_container_img_folletos',
  },
  {
  id:'lapices',
  producto:'Lápices',
  precio:4,
  css:'article_products_boxes_container_img_lapices',
  },  
  {
  id:'tarjetas',
  producto:'Tarjetas personales',
  precio:70,
  css:'article_products_boxes_container_img_tarjetas',
  },
];


// display productos
// display productos
const container_productos = document.getElementById('container_productos');

const carrousel_h1 = document.getElementById('carrousel_h1');
const carrousel_p = document.getElementById('carrousel_p');
const foto_carrousel = document.getElementById('foto_carrousel');
const button_carrousel_1 = document.getElementById('button_carrousel_1');
const button_carrousel_2 = document.getElementById('button_carrousel_2');




for (let i of productos){

  // 1 jerarquia
  let container_productos_item = document.createElement('div');
  container_productos_item.setAttribute('id', `${i.id}`);
  container_productos_item.classList.add('article_products_boxes_container_img')
  container_productos_item.classList.add(`${i.css}`)

  container_productos.appendChild(container_productos_item);


  // 2 jerarquia
  let article_products_boxes_container_add_cart = document.createElement('div');
  article_products_boxes_container_add_cart.classList.add('article_products_boxes_container_add_cart');

  let article_products_boxes_container_data = document.createElement('div');
  article_products_boxes_container_data.classList.add('article_products_boxes_container_data');

  container_productos_item.appendChild(article_products_boxes_container_add_cart);
  container_productos_item.appendChild(article_products_boxes_container_data);

  // 3 jerarquia
  let article_products_boxes_container_add_cart_icon = document.createElement('div');
  article_products_boxes_container_add_cart_icon.classList.add('article_products_boxes_container_add_cart_icon');
  article_products_boxes_container_add_cart_icon.innerHTML = '+';

  let article_products_boxes_container_data_h3 = document.createElement('h3');
  article_products_boxes_container_data_h3.classList.add('font_15');
  article_products_boxes_container_data_h3.innerHTML = `${i.producto}`;

  let article_products_boxes_container_data_price = document.createElement('div');
  article_products_boxes_container_data_price.classList.add('font_15');
  article_products_boxes_container_data_price.innerHTML = `$ ${i.precio}`;

  article_products_boxes_container_add_cart.appendChild(article_products_boxes_container_add_cart_icon);

  article_products_boxes_container_data.appendChild(article_products_boxes_container_data_h3);
  article_products_boxes_container_data.appendChild(article_products_boxes_container_data_price);
  
}

// filtros
// filtros

const auxIdFunc = (idItem) => {

  for (let i of productos){
    console.log(i.id, idItem);

    const container_productos_item = document.getElementById(i.id);

    if (idItem === 'todos'){
      container_productos_item.classList.remove('display_none')
    }
    else if (i.id !== idItem){

      if (!container_productos_item.classList.contains('display_none')) {
        container_productos_item.classList.add('display_none')
      }
    }
    else{
      container_productos_item.classList.remove('display_none')
    }
  }
};

const carrousel = (state) => {
  console.log(foto_carrousel.src)
  if (state){
    foto_carrousel.src="/assets/mochilas.png"
    
    carrousel_h1.innerHTML = 'Mochilas recicladas';
    carrousel_p.innerHTML = 'En GreenInk, estamos comprometidos con la creación de soluciones sostenibles en la industria gráfica. Por eso, queremos celebrar tus compras con una oferta especial. Al adquirir productos por un monto superior a 20 mil pesos, te regalaremos una mochila reciclada, fabricada con materiales amigables con el medio ambiente. Esta es nuestra manera de agradecerte por apoyar nuestro compromiso con el planeta y de invitarte a unirte a nuestra causa. ¡Haz tu compra ahora y llévate este regalo exclusivo con GreenInk!';
    
    button_carrousel_1.classList.add('button_on');
    button_carrousel_2.classList.remove('button_on');  
  }
  else {
    foto_carrousel.src="/assets/carrousel2invertido.png"
    
    carrousel_h1.innerHTML = 'Sumá puntos';
    carrousel_p.innerHTML = 'En GreenInk, nos enorgullecemos de nuestro compromiso con la sostenibilidad en el mundo de los gráficos. Y ahora, con nuestro programa de puntos, estamos encantados de ofrecer aún más incentivos a nuestros clientes. Simplemente entregándonos sus revistas y periódicos viejos, puede ganar puntos que pueden usarse para nuestros productos de alta calidad. Entonces, ¿por qué no unirse a nuestra misión de reducir los desechos y proteger el medio ambiente, mientras disfruta de los beneficios de nuestros servicios creativos de primer nivel? ¡Traiga sus materiales de lectura hoy y comience a ganar esos valiosos puntos!';
    
    button_carrousel_1.classList.remove('button_on');
    button_carrousel_2.classList.add('button_on');    
  }

  console.log(foto_carrousel.src)

}

const mayor_menor = () =>{

  let  ordenar_productos = document.getElementById('ordenar_productos');
  console.log('entro', ordenar_productos.value);

  let folletos = document.getElementById('folletos');
  let cuadernos = document.getElementById('cuadernos');
  let bolsas = document.getElementById('bolsas');
  let lapices = document.getElementById('lapices');
  let tarjetas = document.getElementById('tarjetas');
  let agendas = document.getElementById('agendas');

  if (ordenar_productos.value === 'mayor_precio'){

    lapices.classList.remove('order_1');
    cuadernos.classList.remove('order_2');
    agendas.classList.remove('order_3');
    bolsas.classList.remove('order_4');
    tarjetas.classList.remove('order_5');
    folletos.classList.remove('order_6');

    agendas.classList.remove('order_1');
    bolsas.classList.remove('order_2');
    cuadernos.classList.remove('order_3');
    folletos.classList.remove('order_4');
    lapices.classList.remove('order_5');
    tarjetas.classList.remove('order6');

    folletos.classList.add('order_1');
    tarjetas.classList.add('order_2');
    bolsas.classList.add('order_3');
    agendas.classList.add('order_4');
    cuadernos.classList.add('order_5');
    lapices.classList.add('order_6');

  }  
  else if (ordenar_productos.value === 'menor_precio'){

    folletos.classList.remove('order_1');
    tarjetas.classList.remove('order_2');
    bolsas.classList.remove('order_3');
    agendas.classList.remove('order_4');
    cuadernos.classList.remove('order_5');
    lapices.classList.remove('order_6');

    agendas.classList.remove('order_1');
    bolsas.classList.remove('order_2');
    cuadernos.classList.remove('order_3');
    folletos.classList.remove('order_4');
    lapices.classList.remove('order_5');
    tarjetas.classList.remove('order6');

    lapices.classList.add('order_1');
    cuadernos.classList.add('order_2');
    agendas.classList.add('order_3');
    bolsas.classList.add('order_4');
    tarjetas.classList.add('order_5');
    folletos.classList.add('order_6');

  }  
  else if (ordenar_productos.value === 'alfabeticamente'){

    folletos.classList.remove('order_1');
    tarjetas.classList.remove('order_2');
    bolsas.classList.remove('order_3');
    agendas.classList.remove('order_4');
    cuadernos.classList.remove('order_5');
    lapices.classList.remove('order_6');

    lapices.classList.remove('order_1');
    cuadernos.classList.remove('order_2');
    agendas.classList.remove('order_3');
    bolsas.classList.remove('order_4');
    tarjetas.classList.remove('order_5');
    folletos.classList.remove('order_6');

    agendas.classList.add('order_1');
    bolsas.classList.add('order_2');
    cuadernos.classList.add('order_3');
    folletos.classList.add('order_4');
    lapices.classList.add('order_5');
    tarjetas.classList.add('order_6');

  }

}

const mostrar_carrito = (state) =>{

  const aside_container = document.querySelector('.aside_container');

  state ?  
  aside_container.classList.remove('display_none')
  :
  aside_container.classList.add('display_none')
}