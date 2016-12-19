import React, { Component } from 'react';

class VideoListItem extends Component{

  render(){
    const { video, onVideoSelect } = this.props;
    const imgUrl = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
      <li onClick={()=> onVideoSelect(video)} class='list-group-item'>
        <div class="video-list media">
          <div class="media-left">
            <img src={imgUrl}></img>
          </div>
          <div class="media-body">
            <div>{title}</div>
            <div>{video.snippet.channelTitle}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
