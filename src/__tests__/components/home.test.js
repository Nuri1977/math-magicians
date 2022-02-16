import renderer from 'react-test-renderer';
import Home from '../../pages/Home';

describe('Testing home component', () => {
  it('Home renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
