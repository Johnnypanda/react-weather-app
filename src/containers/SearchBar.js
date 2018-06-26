import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
        //bind the function to the context
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    //mind the context (look up to state)
                    onChange={this.onInputChange} 
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}