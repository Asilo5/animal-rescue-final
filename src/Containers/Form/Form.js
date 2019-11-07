import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendDonations } from '../../actions';
import { postDonations } from '../../apiCalls';

export class Form extends Component {
    constructor() {
      super();
      this.state = {
        id: Date.now(),
        name: '',
        donation: 0
      }
    }

    handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
      e.prevendDefault();
      postDonations(this.state);
      this.props.sendDonations(this.state);
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

export const mapDispatchToProps = dispatch => (
    bindActionCreators({
        sendDonations
    }, dispatch)
  );

export default connect(null, mapDispatchToProps)(Form);