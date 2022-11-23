import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import NotFound from '../component/NotFound';

describe('NotFound component testing', () => {
  test('Does the NotFoud component match snapshot', () => {
    const notFound = render(
      <BrowserRouter>
      <Provider store={store}>
        <NotFound />
      </Provider>
      </BrowserRouter>
    );
    expect(notFound).toMatchSnapshot();
  });

  test('NotFound component should have a heading of "404"', () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
        <NotFound />
      </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toHaveTextContent("404");
  });
})