import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { ThemeProvider } from '../../../context/ThemeContext';
import RecipeList from '../RecipeList';
import recipes from '../../../fixtures/recipes';

afterEach(cleanup);

const MockRecipeList = ({ recipes }) => {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <RecipeList recipes={recipes}/>
            </BrowserRouter>
        </ThemeProvider>
    )
}
describe('RecipeList', () => {
  it('renders error message when no recipes data is empty', () => {
    const { getByText } = render (
        <MockRecipeList recipes={[]} />
    );
    const divElement = getByText(/No recipes to load.../i);
    expect(divElement).toBeInTheDocument();
  });

  it('renders recipes list', () => {
    const { container } = render (
      <MockRecipeList recipes={recipes} />
    );
    const divElements = container.getElementsByClassName('card');
    expect(divElements.length).toBe(3);
  });
    
});