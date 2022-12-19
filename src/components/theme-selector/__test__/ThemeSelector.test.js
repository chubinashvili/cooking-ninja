import { render, screen, cleanup } from '@testing-library/react';
import { ThemeProvider } from '../../../context/ThemeContext';

import ThemeSelector from '../ThemeSelector';

afterEach(cleanup);

const MockThemeSelector = () => {
    return (
        <ThemeProvider>
            <ThemeSelector />
        </ThemeProvider>
    )
}

describe('ThemeSelector', () => {
  it('renders all theme colors', () => {
    render(
        <MockThemeSelector />
    );
    const divElements = screen.getAllByTestId('theme-color-element');
    expect(divElements.length).toBe(3);
  });
    
});