import React, { Component } from 'react';
import { getFacts} from '../../services/__mocks__/ronApi';

export default function Blah() extends Component {
  state = {
    facts:''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { facts } = this.state;
    return(
      <>
      <ul>{listOfFacts}</ul>
      </>
    ); 
   }
}