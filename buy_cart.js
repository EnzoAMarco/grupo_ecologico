


// -PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS-
// -PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS--PRODUCTOS-


let productos = [
  {
    id:'agendas',
    producto:'Agendas',
    producto_carrito:'Agenda',
    precio:30,
    css:'article_products_boxes_container_img_agendas',
    p1:'agendas_carrito',
    p2:'agendas_carrito_unidades',
    p3:'agendas_carrito_precio' , 
    p4:0
  },
  {
    id:'bolsas',
    producto:'Bolsas boutique',
    producto_carrito:'Bolsa boutique',
    precio:50,
    css:'article_products_boxes_container_img_bolsas',
    p1:'bolsas_carrito',
    p2:'bolsas_carrito_unidades',
    p3:'bolsas_carrito_precio' , 
    p4:1
  },
  {
    id:'cuadernos',
    producto:'Cuadernos',
    producto_carrito:'Cuaderno',
    precio:20,
    css:'article_products_boxes_container_img_cuadernos',
    p1:'cuadernos_carrito',
    p2:'cuadernos_carrito_unidades',
    p3:'cuadernos_carrito_precio' , 
    p4:2
  },
  {
  id:'folletos',
  producto:'Folletos',
  producto_carrito:'Folletos',
  precio:80,
  css:'article_products_boxes_container_img_folletos',
  p1:'folletos_carrito',
  p2:'folletos_carrito_unidades',
  p3:'folletos_carrito_precio' , 
  p4:3
  },
  {
  id:'lapices',
  producto:'Lápices',
  producto_carrito:'Lápiz',
  precio:4,
  css:'article_products_boxes_container_img_lapices',
  p1:'lapices_carrito',
  p2:'lapices_carrito_unidades',
  p3:'lapices_carrito_precio' , 
  p4:4
  },  
  {
  id:'tarjetas',
  producto:'Tarjetas personales',
  producto_carrito:'Tarjeta',
  precio:70,
  css:'article_products_boxes_container_img_tarjetas',
  p1:'tarjetas_carrito',
  p2:'tarjetas_carrito_unidades',
  p3:'tarjetas_carrito_precio' , 
  p4:5
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
  article_products_boxes_container_add_cart_icon.setAttribute('onclick', `agregar_carrito('${i.p1}', '${i.p2}', '${i.p3}', ${i.p4})`);
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
  console.log(aside_container);
  state ?  
  aside_container.classList.remove('display_none')
  :
  aside_container.classList.add('display_none')
}

const agregar_carrito = (id_caja, id_unidad, id_precio, producto) =>{

  let  caja = document.getElementById(id_caja);

  
  // console.log(Number(unidad.innerHTML));

  if(caja === null){
    let  carrito_contenido = document.getElementById('carrito_items_container');

    let item_div_container = document.createElement('div');
    let item_div_hr = document.createElement('hr');
    item_div_container.setAttribute('id', `${id_caja}`);
    item_div_container.classList.add('padding_vertical_carrito')
    item_div_container.classList.add('tamaño_item_carrito')
    item_div_hr.classList.add('prueba1')    

    carrito_contenido.appendChild(item_div_hr);
    carrito_contenido.appendChild(item_div_container);


    // 2 jerarquia

    let item_div_ul = document.createElement('ul');

    item_div_container.appendChild(item_div_ul);

    // 3 jerarquia

    let item_div_ul_div_Superior = document.createElement('div');

    let item_div_ul_div_inferior = document.createElement('div');

    item_div_ul_div_Superior.classList.add('carrito_ul_div_Superior')    
    item_div_ul_div_inferior.classList.add('carrito_ul_div_inferior')

    item_div_ul.appendChild(item_div_ul_div_Superior);
    item_div_ul.appendChild(item_div_ul_div_inferior);

    // 4 jerarquia

    let item_div_ul_div_Superior_li = document.createElement('li');
    let item_div_ul_div_Superior_div = document.createElement('div');

    let item_div_ul_div_inferior_li = document.createElement('li');


    item_div_ul_div_Superior_div.classList.add('carrito_ul_div_Superior_txt')

    item_div_ul_div_inferior_li.classList.add('font_15')

    item_div_ul_div_inferior_li.innerHTML = '$ ';

    item_div_ul_div_Superior.appendChild(item_div_ul_div_Superior_li);
    item_div_ul_div_Superior.appendChild(item_div_ul_div_Superior_div);

    item_div_ul_div_inferior.appendChild(item_div_ul_div_inferior_li);

    // 5 jerarquia

    let item_div_ul_div_Superior_li_div = document.createElement('div');

    let item_div_ul_div_Superior_li_li1 = document.createElement('li');
    let item_div_ul_div_Superior_li_li2 = document.createElement('li');

    let item_div_ul_div_inferior_li_span = document.createElement('span');

    item_div_ul_div_Superior_li_div.classList.add(productos[producto]['css'], 'producto_img_carrito')
    item_div_ul_div_Superior_li_li1.classList.add('font_15');
    item_div_ul_div_Superior_li_li2.classList.add('font_1');
    
    item_div_ul_div_inferior_li_span.setAttribute('id', `${id_precio}`);

    item_div_ul_div_Superior_li_li1.innerHTML = productos[producto]['producto_carrito'];
    item_div_ul_div_Superior_li_li2.innerHTML = 'Unidades: ';

    item_div_ul_div_inferior_li_span.innerHTML = productos[producto]['precio'];


    item_div_ul_div_Superior_li.appendChild(item_div_ul_div_Superior_li_div);
    item_div_ul_div_Superior_div.appendChild(item_div_ul_div_Superior_li_li1);

    item_div_ul_div_Superior_div.appendChild(item_div_ul_div_Superior_li_li2);

    item_div_ul_div_inferior_li.appendChild(item_div_ul_div_inferior_li_span);

    // 6 jerarquia

    let item_div_ul_div_Superior_li_li2_span = document.createElement('span');

    item_div_ul_div_Superior_li_li2_span.setAttribute('id', `${id_unidad}`);

    item_div_ul_div_Superior_li_li2_span.innerHTML = ' 1 ';

    item_div_ul_div_Superior_li_li2.appendChild(item_div_ul_div_Superior_li_li2_span);
    
  }
  else if(caja){
    let  unidad = document.getElementById(id_unidad);
    let  precio = document.getElementById(id_precio);

    unidad.innerHTML = Number(unidad.innerHTML) + 1;
    precio.innerHTML = productos[producto]['precio'] * Number(unidad.innerHTML);
  }


  let  precio_total_js = document.getElementById('precio_total_js');
  let  precio_bolsas = document.getElementById('bolsas_carrito_precio');
  console.log(precio_bolsas);

  let  precios_act = {

    bolsas: document.getElementById('bolsas_carrito_precio'),
    agendas: document.getElementById('agendas_carrito_precio'),
    folletos: document.getElementById('folletos_carrito_precio'),
    cuadernos: document.getElementById('cuadernos_carrito_precio'),
    lapices:document.getElementById('lapices_carrito_precio'),
    tarjetas:document.getElementById('tarjetas_carrito_precio'),

  };
  
  precio_total_js.textContent = 

  Number(precios_act.bolsas ? precios_act.bolsas.innerHTML : 0) +
  Number(precios_act.agendas ? precios_act.agendas.innerHTML : 0) +
  Number(precios_act.folletos ? precios_act.folletos.innerHTML : 0) +
  Number(precios_act.cuadernos ? precios_act.cuadernos.innerHTML : 0) +
  Number(precios_act.lapices ? precios_act.lapices.innerHTML : 0) +
  Number(precios_act.tarjetas ? precios_act.tarjetas.innerHTML : 0)

  ;
console.log(Number(precios_act.tarjetas ? precios_act.tarjetas.innerHTML : 0));
  return (ordenar_productos)
}

const reservar_carrito = () => {
  
  let  reservar_contenido = document.getElementById('carrito_items_container');
  let  reservar_precio_total_js = document.getElementById('precio_total_js');
  let  boton_reservar = document.getElementById('boton_reservar');


  reservar_contenido.innerHTML = '';
  reservar_precio_total_js.textContent = 0;
  boton_reservar.textContent = 'Reserva exitosa';

  setTimeout(() => {

    boton_reservar.textContent = 'Reservar';

  }, "2000");
}
