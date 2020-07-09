import React from 'react';


function MediaCard(props){
    return (
    <div><h1>{props.title}</h1><p>{props.body}</p><img
    src={props.imageURL} alt="Cannot display the img"/></div>
    );
}

export default MediaCard;