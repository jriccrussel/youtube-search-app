import React, { Component } from 'react'
import SearchBar from './search'
import youtube from '../api/youtube'

class Index extends Component {

    // term - parameter - 
    onTermSubmit = (term) =>{
        youtube.get('/search', {
            params: {
                q: term
            }
        })

        // console.log(term)
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default Index
