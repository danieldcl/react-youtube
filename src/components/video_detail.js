import React from 'react';


class VideoDetail extends React.Component{


  render(){
    if(!this.props.video){
      return <div> Loading... </div>;
    }

    const videoId = this.props.video.id.videoId;
    const url= `https://www.youtube.com/embed/${videoId}`;

    return (
      <div class="video-detail col-md-8">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={url} ></iframe>
        </div>
        <div class="details">
          <div>{this.props.video.snippet.title}</div>
          <div>{this.props.video.snippet.description}</div>
          <div>{this.props.video.snippet.channelTitle}</div>
        </div>
      </div>
    )
  };


}

export default VideoDetail;
