import React, { Component } from "react";
import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieSearched: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
        })
    
        const filteredMovies = this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.movieSearched.toLowerCase()))
        this.props.updateMovies(filteredMovies)
    }        

    submitMovie = (event) => {
        event.preventDefault()
        this.clearInputs()
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