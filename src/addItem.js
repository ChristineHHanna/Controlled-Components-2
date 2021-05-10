import React, {Component} from 'react'

class AddItem extends Component {
    state = {
    value: '',
  };

    handleChange = event => {
       this.setState({ value: event.target.value });
     };
    
    addClick = event => {
      event.preventDefault();
       this.props.onaddClick(this.state.value)
    };
    
    inputIsEmpty = () => {
       return this.state.value === '';
    };
                         
  render(){
    return(
     <div> 
        <form onSubmit={this.addClick}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
           />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
      </div>
     )
  };
}

export default AddItem