import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';

class VideoList extends Component{
    constructor(props){
        super(props);
    }
render(){
    const  videoItems = this.props.videos.map((video) =>
        <VideoListItem key={video.etag}  video={video}  selectedChange={(selectedVideo) => this.props.selectedVideo(selectedVideo)}/>)
    return(
            <ul className="col-md-4 list-group">
            {videoItems}
            </ul>
          );
        }
}

export default VideoList;
