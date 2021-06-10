import React from "react"

function BlogPost (props){


    return (

        <div>
             <div className="blog-post">
                <h2>{props.postie.title}</h2>
                <h3>{props.postie.subTitle}</h3>
                <p>Posted by {props.postie.author} on {props.postie.date}</p>
            </div>
        </div>
    )
}


export default BlogPost