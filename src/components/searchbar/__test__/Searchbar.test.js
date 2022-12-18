import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Searchbar from '../Searchbar';

afterEach(cleanup);

const MockSearchbar = () => {
    return (
        <BrowserRouter>
            <Searchbar />
        </BrowserRouter>
    )
}
describe('Searchbar', () => {
  it('renders input element', () => {
    render(
        <MockSearchbar />
    );
    const inputElement = screen.getByLabelText(/Search:/i);
    expect(inputElement).toBeInTheDocument();
});

  it('should be able to type into input', () => {
    render(
        <MockSearchbar />
    );
    const inputElement = screen.getByLabelText(/Search:/i);
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "test search" } })
    expect(inputElement).toHaveValue("test search");
  });
    
});