export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=wca5Wk86Tr89vWrO6Z3s5k1VAkGTsI3p&limit=10&q=${ encodeURI(category) }`
    const response = await fetch(url);

    const { data } = await response.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}