import React from "react";

function imageList(props) {
  const imageList = props.images.map(image => {
    return <img src={image.urls.regular} key={image.id} width="500px" />;
  });
  return <div>{imageList}</div>;
}

export default imageList;
