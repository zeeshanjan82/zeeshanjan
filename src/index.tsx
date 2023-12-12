import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import storage from 'redux-persist/lib/storage';
import * as models from './models';
import { init } from '@rematch/core';
import persistPlugin, { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();

const persistConfig = {
  key: 'root',
  storage,
  version: 2,
  whitelist: ['user', 'app'],
};

const store = init({
  models,
  plugins: [persistPlugin<any, any>(persistConfig)],
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <App />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
