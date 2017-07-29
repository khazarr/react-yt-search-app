import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCWHsVt6OBwZLNYXzSj8w94gipeYu9HWXw';




//Create a new compotnent
class App extends Component {

  constructor(props){
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'funny racoons'}, (videos) =>{
      this.setState({videos});
      //this.setState({videos:videos})
    })


  }



  render(){
    return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]}/>
          <VideoList videos={this.state.videos}/>
        </div>
    );
  }
}


//Take this component and put it on a page
ReactDOM.render(<App />,document.querySelector('.container'));
