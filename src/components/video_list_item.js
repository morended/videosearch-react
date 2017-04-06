import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class VideoListItem extends Component{

    constructor(props){
       super(props);
    }
    render(){
        const imageURL=this.props.video.snippet.thumbnails.default.url;
        const imageTitle=this.props.video.snippet.title;
        const selectedChange = ()=>this.props.selectedChange(this.props.video);

        return(
            <li onClick={selectedChange} className="list-group-item">
                <div  className="video-list media">
                    <div className="media-left">
                       <img className="media-object" src={imageURL}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {imageTitle}
                        </div>
                    </div>
                </div>
            </li>

        );
    }
}

export default VideoListItem;