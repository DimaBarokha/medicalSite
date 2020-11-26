import React from "react";

const SingleComment = (props) => {
    return (
        <div className="about__comments-slide">
            <img src={props.item.src} alt="" className="about__comments-img"/>
            <p className="about__comments-text">
                {props.item.comment}
            </p>
            <h3 className="about__comments-author">
                {props.item.author}
            </h3>
        </div>
    )
};
export default SingleComment;
