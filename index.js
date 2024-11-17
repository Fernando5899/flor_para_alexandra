window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000); // Puedes ajustar el tiempo de espera (en milisegundos) según tus necesidades
};
