import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';

const MockApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

describe('Testing App component', () => {
  it('App renders correctly', () => {
    const tree = renderer
      .create(<MockApp />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
