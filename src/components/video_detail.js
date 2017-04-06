import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class VideoDetail extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const video=this.props.video;
        if(video==null){
            return <div>Still Loading</div>
        }
        const videoId=video.id.videoId;
        const url=`https://www.youtube.com/embed/${videoId}`;
        console.log(url);
        return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"> </iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
        )
    }
}

export default VideoDetail;