import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Testing Calculator component', () => {
  it('Calculatore renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Testing Calculator buttons', () => {
  it('Calculator AC button ', () => {
    render(<Calculator />);
    const buttonElement = screen.getByText('AC');
    expect(buttonElement).toBeInTheDocument();
  });
  it('Calculator 1 button', () => {
    render(<Calculator />);
    const buttonElement = screen.getByText('1');
    expect(buttonElement).toBeEnabled();
  });
  it('Calculator  button clicked', () => {
    render(<Calculator />);
    const buttonElement = screen.getByRole('button', { name: /2/i });
    expect(buttonElement).toBeVisible();
  });
});
