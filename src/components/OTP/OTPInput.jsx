import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class OTPInput extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  handleSubmit = (e) => {
    // ...
    console.log(this.state.otp);
  };

  render() {
    return (
      <div class="flex justify-center text-center text-base mt-4 gap-6">
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
      
      />
      
      </div>
    );
  }
}