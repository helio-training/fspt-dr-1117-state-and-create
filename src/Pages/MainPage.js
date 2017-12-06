import React, { Component } from "react"
import PropTypesDefinitions from "prop-types"

class MainPage extends Component {
    constructor(props){
        super(props)

        console.log("props", props)
        console.log("1", this.state)

        this.state = {
            message: 'Hello World from MainPage State',
        }  
        
        console.log("After State Init")
        console.log("2", this.state)
    }

    // componentDidMount(){
    //     this.setState({ message: "Hello World from MainPage will Mount"})
    // }

    render() {
        return (
            <div>
                {this.state.message}
                {this.props.value}
                {this.props.content}
            </div>
        )
    }
}

MainPage.propTypes = {
    content: PropTypesDefinitions.string,
    value: PropTypesDefinitions.number.isRequired
}

export default MainPage