export default async function ajax(config) {
    try {
        const request  = await fetch(config.url)
        const response = await request.json()
        
        config.success(response)
    }catch( error ) {
        config.error(error)
    }
}