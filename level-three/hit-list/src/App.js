import React, { Component } from 'react';
import HitList from "./HitList"
import Header from "./Header"

class App extends Component {
  constructor() {
    super();
    this.state = { 
      character: {},
      targets: []
     }
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => {
          this.setState({
            targets: data 
          })
        })
  }
  render() { 
    const mappedArray = this.state.targets.map(target =>  <HitList names={this.state.name} images={this.state.image} {...target}/>)
    
    return ( 
        <div>
            <Header />  
            <div className="center-it">
                <div className="container">{mappedArray}</div>
            </div>
      </div>
    )
  }
}
export default App;