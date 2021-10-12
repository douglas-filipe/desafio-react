import axios from 'axios'

const apiShazam = axios.create({
    baseURL: "https://shazam-core.p.rapidapi.com/v1/charts"
})

export default apiShazam