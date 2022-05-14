import {
  setData
} from './actions.js';


import createStore from './store.js';

import reducer from './reducer.js';


export default function App(app) {
  const store = createStore(reducer);
  const target = document.createElement('div');
  app.appendChild(target);
  
  const handleClick = () => {
      const { data } = store.getState();

      store.dispatch(setData(data+30));
      render(app);
  }

  const template = () => {
      const { data } = store.getState();
      
      return `<button>${data}</button>`;
  }

  function render() {
      target.innerHTML = template();
      target.addEventListener("click", handleClick);
  }

  render();
}