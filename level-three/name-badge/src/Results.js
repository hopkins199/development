import React from "react"
import NameBadge from "./NameBadge"

function Results(props) {
   
    const badgeComponent = props.badge.map(item => <NameBadge badges={item}/>)
        
    return (
            <div>
                {badgeComponent}
            </div>
        )
}

export default Results