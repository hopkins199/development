import React from "react"


function NameBadge(props){
    console.log(props)
    return(
        <div className="results-box">
            <div className="form-results">
                <div className="name-res">
                    <h5 className="name-results badge">My Name is: {props.badges.firstName} {props.badges.lastName}</h5>
                </div>
                <br />
                <div className="emizzle">
                    <h5 className="email-results badge">Here is my Email: {props.badges.email}</h5>
                    <h5 className="birth-results badge">Where I was born: {props.badges.birthPlace}</h5>
                </div>
                <br />
                <div className="foobizzle">
                    <h5 className="phone-results badge">Here is my number: {props.badges.phoneNumber}</h5>
                    <h5 className="food badge">My favorite food: {props.badges.favoriteFood}</h5>
                </div>
                <br />
                <div className="descripizzle">
                    <p className="textbox-results badge">Here is stuff about me: {props.badges.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NameBadge