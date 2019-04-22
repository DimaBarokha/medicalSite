import React from "react";

const SingleComment = ({item}) => {
    return (
        <div className="about__comments-slide">
            <img src={item.src} alt="" className="about__comments-img"/>
            <p className="about__comments-text">
                {item.comment}
            </p>
            <h3 className="about__comments-author">
                {item.author}
            </h3>
        </div>
    )
};
export default SingleComment;
