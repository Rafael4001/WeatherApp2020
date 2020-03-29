import React from 'react';
import Weather from './views/Weather'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers'

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Weather/>
    </Provider>
  );
}

export default App;
