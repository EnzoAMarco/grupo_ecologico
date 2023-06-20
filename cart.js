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
