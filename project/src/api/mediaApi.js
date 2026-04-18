import axios from 'axios'

export async function fetchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('/unsplash/search/photos', {  // ← /unsplash instead of full url
        params: { query, page, per_page },
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
    })
    return res.data
}

export async function fetchVideos(query, page = 1, per_page = 15) {
    const res = await axios.get("/pexels/videos/search", {  // ← /pexels instead of full url
        params: { query, page, per_page },
        headers: { Authorization: PEXELS_KEY }
    })
    return res.data
}

export async function fetchGIFs(query, page = 1, per_page = 15) {
    const res = await axios.get("/giphy/v1/gifs/search", {  // ← /giphy instead of full url
        params: {
            q: query,
            api_key: GIPHY_KEY,
            limit: per_page,
            offset: (page - 1) * per_page
        }
    })
    return res.data
}