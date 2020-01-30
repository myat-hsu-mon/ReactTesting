import React from 'react';
class TestClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle:true};
    }
    handleClick(){
        // this.setState(state =>({
        //     isToggle:!state.isToggle
        // }))
    alert("You clicked the ON")
    }
    
    render(){
    return <button onClick={this.handleClick}>
        {this.state.isToggle ? 'ON':'OFF'}
    </button>
    }
}
export default TestClass;