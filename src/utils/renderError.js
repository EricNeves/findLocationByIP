export default function renderError() {
    const input = document.querySelector('input')

    input.classList.add('active')

    input.onfocus = () => {
        input.classList.remove('active')
    }
}