import React from "react"
import friendData from "./friendData"
import Friend from "./Friend"


function FriendsList (){
    const friendComponent = friendData.map(item => <Friend oleBoy={item} />)

    return (
        <div className="container">
            {friendComponent}
        </div>
    )
}

export default FriendsList