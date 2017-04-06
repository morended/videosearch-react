
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBh2bd3On_Y_3SkqfyZZ4tkVi0pgLenuGI';

class App  extends Component{
    constructor(props){
        super(props);

        this.state ={
            videos : [],
            selectedVideo : ''
        }

        this.handleSearchTerm('India');
    }
    handleSearchTerm(term) {
        console.log(term);
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })

    }


    handleSelectedVideo(selectedVideo){
            this.setState({selectedVideo:selectedVideo})
            console.log(selectedVideo);

        }
    render(){
        console.log(this.state.videos);
        console.log(this.state.selectedVideo);
        return(
              <div>
                  <div>
                  <SearchBar changeSearchTerm={(term)=> this.handleSearchTerm(term)}/>
                  </div>
                  <div>
                  <VideoDetail video={this.state.selectedVideo || this.state.videos[0]}/>
                  <VideoList videos={this.state.videos} selectedVideo={(selectedVideo) => this.handleSelectedVideo(selectedVideo)}/>
                  </div>
              </div>

        );
    }


}

ReactDOM.render(<App />, document.getElementById('container'));

