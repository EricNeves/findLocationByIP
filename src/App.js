import renderError from "./utils/renderError"
import renderInfo  from "./utils/renderInfo"
import renderMap   from "./utils/renderMap"
import ajax        from "./utils/ajax"

const button = document.querySelector("button")

function handleClick( e ) {
    e.preventDefault()

    const form = document.forms.form 
    const host = form.host.value

    const key = process.env.KEY_IPIFY_API

    ajax({
        url: `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${host}`,
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

button.addEventListener('click', handleClick)