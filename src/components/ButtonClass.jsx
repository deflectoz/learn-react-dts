import React, { Component } from "react";

class ButtonClass extends Component {
    render() {
        const { text } = this.props
        return <button>{text ? text : "Default Value"}</button>
    }
}

export default ButtonClass;