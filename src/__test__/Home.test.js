import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import Home from '../component/Home';

describe('Home component testing', () => {
  test('Does the Home component match snapshot', () => {
    const home = render(
      <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      </BrowserRouter>
    );
    expect(home).toMatchSnapshot();
  });
})