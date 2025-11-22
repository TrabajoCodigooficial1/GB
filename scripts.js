function verGaleria() {
    window.location.href = "https://galeriablanco.wordpress.com";
}

function toggleInfo(button) {
    const container = button.parentElement.nextElementSibling;

    container.classList.toggle("open");

    if (container.classList.contains("open")) {
        button.textContent = "Ver menos";
    } else {
        button.textContent = "Ver más";
    }
}
