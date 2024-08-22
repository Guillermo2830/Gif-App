const apiKey = 'blYA6HG9pE2CKBa7iwac16FrE3jHHx8w'


export default function getGifs ({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.fixed_height_downsampled
            return {title, id, url}
        })
        return gifs
      }
    })
}