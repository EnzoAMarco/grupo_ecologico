const nav_main_ul_mobile = document.getElementById('id_nav_main_ul_mobile');

const abrir_nav = () => {
  nav_main_ul_mobile.classList.remove('collapsed');
}
const cerrar_nav = () => {
  nav_main_ul_mobile.classList.add('collapsed');
}