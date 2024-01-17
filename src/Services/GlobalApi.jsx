import axios from "axios"

const key = '56582fb9031340389b87749fcdbb8d8c'
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key=' + key)
const getGamesList = axiosCreate.get('/games?key=' + key)
const getGameListByGenreId = (id) => axiosCreate.get('/games?key=' + key + '&genres=' + id)

export default {
    getGenreList,
    getGamesList,
    getGameListByGenreId
}