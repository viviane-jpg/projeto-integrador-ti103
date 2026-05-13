const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')
const modalImg = document.getElementById('modal-img')

function abrirModal(titulo, texto, imagem) {
    modal.style.display = 'block'

    modalTitle.innerHTML = titulo
    modalText.innerHTML = texto
    modalImg.src = imagem
}

function fecharModal() {
    modal.style.display = 'none'
}

// Fechar clicando fora
window.onclick = function (event) {
    if (event.target == modal) {
        fecharModal()
    }
}