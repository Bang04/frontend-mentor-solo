import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.tsx'
import store from './sotre/index.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
