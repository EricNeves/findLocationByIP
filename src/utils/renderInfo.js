export default function renderInfo( data ) {
    document.querySelector('#ip').innerHTML = data.ip
    document.querySelector('#city').innerHTML = data.location.city
    document.querySelector('#region').innerHTML = data.location.region
    document.querySelector('#country').innerHTML = data.location.country
}