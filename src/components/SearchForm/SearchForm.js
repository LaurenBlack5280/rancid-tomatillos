import React, { Component } from "react";
import MovieContainer from "../MovieContainer/MovieContainer";
import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieSearched: ''
        }
    }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name] : event.target.value,
    //     })
    //     const filteredMovies = this.props.movies.filter(movie => movie.title.includes(this.state.movieSearched))
    //     console.log(filteredMovies)
    //     this.props.updateMovies(filteredMovies)
    //     return filteredMovies
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
        const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.movieSearched.toLowerCase()))
        console.log(filteredMovies)
        this.props.updateMovies(filteredMovies)
        return filteredMovies
    }        

    submitMovie = (event) => {
        event.preventDefault()
        this.clearInputs()
        console.log('movieSearched', this.state.movieSearched)
    }

    clearInputs = () => {
        this.setState({
            movieSearched: ''
        })
    }

    render() {
        return (
            <form>
                <input
                type="text"
                placeholder="Search"
                name="movieSearched"
                value={this.state.movieSearched}
                onChange={event => this.handleChange(event)}
                />
                <button onClick={event => this.submitMovie(event)}>Submit</button>
            </form>
        )
    }
}


export default SearchForm