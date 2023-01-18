//concatenando con el + , es unir palabras,uniendo el menu
var menu=
'<table class="tabla">'+
  '<tr>'+
    '<th><img src="img/logo.PNG"  alt="logo" class="mascota"></th>'+
    '<!-- menu principal -->'+
    '<td class="columna">'+
    '  <a href="index2.html";> <img src="img/inicio1.PNG" alt="logo" width="50px">&nbsp'+
      '<a href="galeria.html"><img src="img/galeria.PNG" alt="logo"width="50px"> &nbsp'+
    ' <a href="productos.html"><img src="img/carrito1.PNG" alt="logo"width="50px"> &nbsp'+
      '<a href="video.html"><img src="img/yt1.PNG" alt="logo"width="50px"> &nbsp'+
      '<a href="https://wa.me/593997766575" target="_blank"><img src="img/wp.PNG" alt="logo"width="50px"> &nbsp'+
      '<a href="https://m.facebook.com/profile.php?id=100065365986018&_rdr" target="_blank"><img src="img/fb.PNG" alt="logo"width="50px"> &nbsp'+
      '<a href="ubicacion.html"><img src="img/ubicacion.PNG" alt="logo" width="50px"> &nbsp'+
  '</td>'+
  '</tr>'+

'</table>';
//alert(menu);
document.getElementById('menu-contenedor').innerHTML=menu;
