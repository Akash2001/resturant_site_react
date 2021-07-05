import React from "react";

const MenuItem = (props) => {
    return (
        <p className="col-lg-4 col-sm-6 "><img src={props.img} alt="" /><span>{props.name}</span></p>
    );
}

export default MenuItem;