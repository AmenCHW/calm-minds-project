import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

test('renders learn react link', () => {
  const { getByText } = render(
    <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthContextProvider>
  );

  expect(getByText(/Healing/i)).toBeInTheDocument();
});
