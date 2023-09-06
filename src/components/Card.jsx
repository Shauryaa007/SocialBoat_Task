import React from 'react';

export const Card=({ heading, videoUrl, tags })=> {

    const cardStyle={

        border:'2px solid black',
        margin:'10px 400px 100px 400px',
        borderRadius:'20px',
        backgroundColor:'LightGray'

    };

  return (
    <div className="card" style={cardStyle}>
      <h2>{heading}</h2>
      <h2>Tags : {tags}</h2>
      <div className="video" style={{margin:'5px 5px 5px 5px'}}>
        <iframe
          width="80%"
          height="500"
          src={videoUrl}
          title={heading}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Card;
