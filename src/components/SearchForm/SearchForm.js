import React, { Component } from "react";
import './SearchForm.css'

class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // movies: props.movieData,
            movieSearched: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            // movies: this.props.movieData
        })
    }

    submitMovie = (event) => {
        event.preventDefault()
        //console.log('event', event)
        console.log('movieSearched', this.state.movieSearched)
        console.log('movies', this.props.movies)
        
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