import React from "react";

const MyVideo =  () => {
    return (
    <div>
      <h2>Animation Video</h2>
      <video width="600" controls>
        <source src="/videos/animation01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>
    );
}

export default MyVideo;