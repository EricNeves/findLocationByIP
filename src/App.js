import renderError from "./utils/renderError"
import renderInfo  from "./utils/renderInfo"
import renderMap   from "./utils/renderMap"
import ajax        from "./utils/ajax"

const form = document.querySelector("form")

function handleSubmit( e ) {
    e.preventDefault()

    const formValue = document.forms.form 
    const host = formValue.host.value

    const API_KEY = process.env.KEY_IPIFY_API

    ajax({
        url: `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${host}`,
        success( res ) {
            renderMap({
                lat: res.location.lat,
                lng: res.location.lng
            })
            renderInfo(res)
        },
        error( err ) {
            renderError()
        }
    })
}

renderMap({
    lat: -3.13016024377082,
    lng: -60.02343566111872
})

form.addEventListener('submit', handleSubmit)