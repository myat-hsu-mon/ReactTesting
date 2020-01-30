import React from 'react';
class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text:'',
            option:'world'
        }
        this.changeName = this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeName(e){
        this.setState({
            option:e.target.value
        })
        console.log(e.target.value)
    }
    handleSubmit(e){
        console.log(e)
        e.preventDefault();
    }
    changeTextarea=(e)=>{
        console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }
    render() {
        return (
            <form>
                <select value={this.state.option} onChange={this.changeName}>
                    <option value="hello">HEllo</option>
                    <option value="world">World</option>
                </select>
            </form>
        )
    }

}
export default FormExample;