import React from "react";
import { ThingConsumer } from "./thingContext";

class Form extends React.Component {

    state = {
        title: "",
        description: "",
        imgUrl: ""
    }

  render() {
    return (
      <div className="form-container">
        <div className="form-inner">
          <ThingConsumer>
            {/* {({ things, handleSubmit, handleChange }) => ( */}
            {things => (
              <form onSubmit={things.handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={things.title}
                  onChange={things.handleChange}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={things.description}
                  onChange={things.handleChange}
                />
                <input
                  type="text"
                  name="imgUrl"
                  placeholder="Image Url"
                  value={things.imgUrl}
                  onChange={things.handleChange}
                />
                <button type="submit">Submit Ugly Thing</button>
              </form>
            )}
          </ThingConsumer>
        </div>
      </div>
    );
  }
}

export default Form;
