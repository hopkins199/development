import React from 'react';

const HitList = (props) => {

    return ( 
        <div className="hit-box">
            <div className="cards">
                <img className="hit-img" src={`${props.image}`} alt="" />
                <div className="target">{props.name}</div>
            </div>
        </div>
     )
}
export default HitList