import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class OTPInput extends Component {
  state = { otp: '' };

  handleChange = (otp) => {
    
    
    this.setState({ otp })
    this.props.setOtpNo(otp);
  };

  handleSubmit = (e) => {
    // ...
    console.log(this.state.otp);
  };

  render() {
    return (
      <div class="flex justify-center text-center text-4xl mt-4 gap-6">
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputProps={{ inputMode: 'numeric' }}
        inputStyle="inputStyle"
      
      />
      
      </div>
    );
  }
}