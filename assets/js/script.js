function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 110 * i);
    });
  }

  const titulo = document.querySelector('h1');
  typeWriter(titulo);

  //* animação 'p'*//

  function typeWriter2(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 18 * i);
    });
  }

  const subtitulo = document.querySelectorAll('p');
  typeWriter2(subtitulo);