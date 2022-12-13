const fetchMovieData = (endpoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies${endpoint}`).then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  });
};
export { fetchMovieData };
