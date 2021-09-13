function cambiarFrame(direccion, id) {
    document.getElementById('iframe-contenedor').src = direccion;
    document.getElementById(id).className = "pagina-activa";
};

function resetearlinksActivos(link1, link2, link3, link4) {
    document.getElementById(link1).className = "";
    document.getElementById(link2).className = "";
    document.getElementById(link3).className = "";
    document.getElementById(link4).className = "";
};

function cambiarImagen(imagen_id, direccion) {
    window.parent.document.getElementById(imagen_id).src = direccion;
};