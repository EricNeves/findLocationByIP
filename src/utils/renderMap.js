export default function renderMap({ lat, lng }) {
    const map = L.map('map').setView([lat, lng], 13)

    /**
     * @description Resolve bug of the leaflet
     * @description Error: Map container is already initialized
     */
    const container = L.DomUtil.get("map")

    if (container != null) {
        container._leaflet_id = null;
    }

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map)

    L.circle([lat, lng], {
        color: '#111',
        fillColor: '#333',
        fillOpacity: 0.5,
        radius: 500
    })
        .addTo(map)
        .bindPopup(`${lat}, ${lng}`)
        .openPopup()

    map.dragging.disable()
}

