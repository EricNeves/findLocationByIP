export default function renderInfo( data ) {
    document.querySelector('.ip h3').innerHTML = data.ip
    document.querySelector('.region h3').innerHTML = data.location.region
    document.querySelector('.country h3').innerHTML = data.location.country
    document.querySelector('.timezone h3').innerHTML = data.location.timezone
}