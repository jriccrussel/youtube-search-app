import React, { Component } from 'react'
import SearchBar from './search'
import youtube from '../api/youtube'
import VideoList from './vidlist'

class Index extends Component {
    state = { videos: [] }

    // term - parameter - pasa nato ddto sa onFormSubmit function sulod nya 'props.onFormSubmit(this.state.term)' therefore ang 'term' is equal to 'this.state.term' ato g pasa
    onTermSubmit = async (term) => {
        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        // console.log(term)
        this.setState({ videos: res.data.items })
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {/* I have {this.state.videos.length} videos. */}
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default Index
