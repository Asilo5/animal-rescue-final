import React, { Component } from 'react';


class Form extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        donation: 0
      }
    }

    handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = () => {

    }
    
    render() {
       return (
         <form>
             <input type='text' 
                     placeholder='Name'
                     name= 'name' 
                     value={this.state.name} 
                     onChange={this.handleChange}
                     />
            <input type='number' 
                     placeholder='Donation'
                     name= 'donation' 
                     value={this.state.donation} 
                     onChange={this.handleChange}
                     />
            <button onClick={this.handleSubmit}> Submit </button>
         </form>
       )
    }
}

export default Form;