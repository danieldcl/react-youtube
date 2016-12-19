import React, { Component } from 'react';

import VideoListItem from './video_list_item';

class VideoList extends Component{
  render(){
    var videoitems = this.props.videos.map(
      (video) => {
        return (<VideoListItem
          video={video}
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag}
          />);
      }
    );

    return (
      <ul class="col-md-4 list-group">
      {videoitems}
      </ul>
    );
  }
}

export default VideoList;
