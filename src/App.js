import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import CounterComponent from './component/counter'
import HookCounter from './component/HookCounter'
function App() {
  return (
      <Provider store={store}>
<CounterComponent/>
<HookCounter/>
      </Provider>
  );
}

export default App;
