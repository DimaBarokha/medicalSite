import React from "react";


const IntroText = (props) =>
    <>
        <h1 className="h1-responsive font-weight-bold mt-sm-5">
            {props.items.title}
        </h1>
        <hr className="hr-light"/>
        <h6 className="mb-4">
            {props.items.text}
        </h6>
    </>

export default IntroText;