import React from "react";
import Header from "./Header";
import Results from "./Results";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phoneNumber: "",
      favoriteFood: "",
      description: "",
      badge: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const newName = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthPlace: this.state.birthPlace,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      favoriteFood: this.state.favoriteFood,
      description: this.state.description
    }
    this.setState(prevState => ({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phoneNumber: "",
      favoriteFood: "",
      description: "",
      badge: [...prevState.badge, newName]
    }))
  }


  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="form-container">
            <div className="form-box">
              <form className="formish">
                <div className="inputs">
                  <div className="name-box form-input">
                    <input
                      className="first"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      placeholder="First Name"
                      size="40"
                    />

                    <input
                      className="last"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      placeholder="Last Name"
                      size="40"
                    />
                  </div>
                  <br />
                  <div className="email-box form-input">
                    <input
                      className="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Email"
                      size="40"
                    />

                    <input
                      className="birth"
                      name="birthPlace"
                      value={this.state.birthPlace}
                      onChange={this.handleChange}
                      placeholder="Place of Birth"
                      size="40"
                    />
                  </div>
                  <br />
                  <div className="phone-box form-input">
                    <input
                      className="phone"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      placeholder="Phone Number"
                      size="40"
                    />

                    <input
                      className="food"
                      name="favoriteFood"
                      value={this.state.favoriteFood}
                      onChange={this.handleChange}
                      placeholder="Favorite Food"
                      size="40"
                    />
                  </div>
                </div>
                <br />
                <div className="text-box">
                  <textarea
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder="Tell us about yourself"
                    rows="5"
                    cols="80"
                  />
                </div>
                <br />
                <div className="btn-box">
                  <button className="btn" onClick={this.handleSubmit}>Sumbit</button>
                </div>
              </form>
            </div>
            </div>
            <Results badge={this.state.badge}/>
        </main>
      </div>
    );
  }
}

export default App;