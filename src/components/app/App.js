import React from 'react';
import store from '../../store';
import { fetchFacts } from '../../actions/ron';

export default function App() {
  store.dispatch(fetchFacts(10));
  return <h1>THE FACTS OF RON SWANSON</h1>;
}
