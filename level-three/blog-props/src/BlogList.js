import React from "react"
import bloggie from "./bloggie"
import BlogPost from "./BlogPost"

function BlogList () {

    const blogComponents = bloggie.map(item => <BlogPost postie={item}/>)


    return (
        <div className="blog-container">
            <div className="inner-blog-container">
                <div>
                    {blogComponents}
                </div>
                <div className="button-container">
                    <button className="old-posts">OLDER POSTS</button>
                </div>
            </div>
        </div>
    )
}


export default BlogList