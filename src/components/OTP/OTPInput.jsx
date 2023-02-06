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
      <div class="flex justify-center text-center text-3xl gap-6">
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span className='text-[#00efc6]'>-</span>}
        inputProps={{ inputMode: 'numeric' }}
        inputStyle="inputStyle"
      
      />
       <button type="submit" onClick={()=>this.setState({otp:''})} class="w-full inline-block px-4  bg-[#00efc6] text-white  font-semibold text-sm leading-tight  rounded-lg shadow-md hover:bg-[#31aa8b] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">Clear Input</button>
                 
      
      </div>
    );
  }
}