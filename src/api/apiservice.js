import axios from 'axios'
const url = 'https://rickandmortyapi.com/api/'
const episodeWithPageService = async (page) => {
  // var response = await axios.get(`${url}episode?page=${page}`)
  var response = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  )
  return response.data
}
export { episodeWithPageService }
