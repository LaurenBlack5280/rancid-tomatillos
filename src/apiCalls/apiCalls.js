const getMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(res => {
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
}

const getSingleMovie = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
    .then(res => {
      console.log('response', res)
      if(!res.ok) {
        throw new Error()
      }
      return res.json()
    })
}
export { getMovies, getSingleMovie }