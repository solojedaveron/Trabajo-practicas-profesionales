const noticias =[
    {
        "titulo": "Un juegazo para aprender CSS",
        "contenido": "CSS Sushi es un juegazo para aprender CSS. Pueden acceder al mismo <a href='https://flukeout.github.io/'>aquí</a>",
        "imagen": "fb-share.jpg",
    },
    {
        "titulo": "Los Simpson con IA",
        "contenido": "Se le pidió a la inteligencia artificial que retrate a Los Simpson en la vida real y esto salió. Si quieres verlos en el siguiente link <a href='https://www.rionegro.com.ar/redes/sociedad/asi-se-ven-los-simpsons-creados-con-inteligencia-artificial-2881668/'>aquí</a>",
        "imagen": "descarga.jpg",
    },
    {
        "titulo": "Digitallers es la mejor propuesta de capacitación!",
        "contenido": "¿Quieres ser un genio del frontend? ¿Qué estás esperando? El programa Digitallers es tu oportunidad. ¿La vas a dejar pasar?",
        "imagen": "compu.jpg",
    }
];
document.addEventListener('DOMContentLoaded', function () {
    const seccionNoticias = document.getElementById('Noticias');

 noticias.forEach(function (noticia, index) {
        const nuevoArticulo = document.createElement('article');
        nuevoArticulo.className = 'noticia';
        nuevoArticulo.id = 'noticia_' + (index + 1);

        const encabezado = document.createElement('header');
        const titulo = document.createElement('h2');
        titulo.textContent = noticia.titulo;
        encabezado.appendChild(titulo);
        nuevoArticulo.appendChild(encabezado);

        const contenido = document.createElement('p');
        contenido.innerHTML = noticia.contenido;
        nuevoArticulo.appendChild(contenido);

        const imagen = document.createElement('img');
        imagen.src = noticia.imagen;
        imagen.width = '400';
        nuevoArticulo.appendChild(imagen);

        seccionNoticias.appendChild(nuevoArticulo);
    });

    document.getElementById('submitComment').addEventListener('click', enviarComentario);

    function enviarComentario() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const comentario = document.getElementById('comentario').value;

        if (nombre.trim() === '' || comentario.trim() === '') {
            alert('Por favor, complete los campos obligatorios *.');
            return;
        }
        const nuevoComentario = document.createElement('article');
        nuevoComentario.innerHTML = `
            <h6>${nombre} ${apellido}</h6>
            <p>${comentario}</p>
        `;
        const seccionComentarios = document.getElementById('Comentarios');
        seccionComentarios.appendChild(nuevoComentario);

        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('correo').value = '';
        document.getElementById('comentario').value = '';

        const customAlert = document.getElementById('customAlert');
        customAlert.style.display = 'block';

        setTimeout(function () {
            customAlert.style.display = 'none';
        }, 5000);
    }
});