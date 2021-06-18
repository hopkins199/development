import React from "react"
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class ThingProvider extends React.Component{
    state={
        things: [],
        title: "",
        description: "",
        imgUrl: "",
        editTitle: "",
        editDescription: ""
    }

    componentDidMount(){
        axios.get("https://api.vschool.io/drewhopkins/thing")
            .then(res =>{
                const things = res.data.map(item => { return {...item, editMode: false}})
                this.setState({things})
            })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        let newThing = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        axios.post("https://api.vschool.io/drewhopkins/thing", newThing)
            .then(response => this.handleRefresh())
    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/drewhopkins/thing/${id}`)
            .then(response => this.handleRefresh())
    }

    handleRefresh = () => {
        axios.get("https://api.vschool.io/drewhopkins/thing")
        .then(res =>{
            const things = res.data.map(item => { return {...item, editMode: false}})
            this.setState({things})
        })
    }

    toggleEdit = (id) => {
        let selectedUglyThing = this.state.things.find(item => item._id === id)
        selectedUglyThing.editMode = true
        let newThings = this.state.things.map(item => item._id === selectedUglyThing.id? selectedUglyThing: item)
        this.setState({things: newThings})

    }

    submitEdits = (e, id) => {
        e.preventDefault()
        let selectedUglyThing = this.state.things.find(item => item._id === id)
        axios.put(`https://api.vschool.io/drewhopkins/thing/${id}`, {title: this.state.editTitle, imgUrl: selectedUglyThing.imgUrl, description: this.state.editDescription})
            .then(response => this.handleRefresh())
            .catch(err => console.log(err))

    }

    render() {
        const {things} = this.state
        return (
            <Provider value={{
                things,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleDelete: this.handleDelete,
                toggleEdit: this.toggleEdit,
                submitEdits: this.submitEdits
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThingProvider, Consumer as ThingConsumer}