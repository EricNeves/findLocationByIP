export default function renderError() {
    const btnClose = document.querySelector('.closeAlert i')
    const popup    = document.querySelector('.popup')

    popup.classList.add('active')

    btnClose.onclick = () => popup.classList.remove('active')

    setTimeout(() => {
        popup.classList.remove('active')
    }, 4000)
}