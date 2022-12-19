import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';

import Navbar from '../Navbar';
import { ThemeProvider } from '../../../context/ThemeContext';

afterEach(cleanup);

const MockNavbar = () => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </ThemeProvider>
    )
}

describe('ThemeSelector', () => {
  it('renders home and create links', () => {
    render(
        <MockNavbar />
    );
    const homeElement = screen.getByText(/Cooking Ninja/i);
    const createElement = screen.getByText(/Create Recipe/i);
    expect(homeElement).toBeInTheDocument();
    expect(createElement).toBeInTheDocument();
  });
    
});