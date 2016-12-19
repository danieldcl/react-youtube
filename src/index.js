import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";

const apiKey = 'AIzaSyDKuQ1eTOAGPGPnGf5TPuZkRk6hkGPEthA';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		 };
		 this.videoSearch('5 minute home workout');
		}


	videoSearch(term){
		YTSearch({key: apiKey, term: term}, (videos)=> {
				this.setState({
					videos:videos,
					selectedVideo: videos[0]
				});
			});
	}

	render() {
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 500);
	  	return (
			  <div>
			    <SearchBar onSearchTermChange= {(term => videoSearch(term))}/>
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
			  </div>
		);
	}
}


const container = document.getElementById('container');
ReactDOM.render(<App/>, container);
