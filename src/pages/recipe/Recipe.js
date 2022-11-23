import { Fragment, useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme'; 

// styles
import './Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true);

    projectFirestore.collection('recipes').doc(id).get()
      .then((doc) => {
        if(doc.exists) {
          setIsPending(false);
          setRecipe(doc.data())
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      })
  }, [id])

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {recipe && 
        <Fragment>
          <h2 className={`page-title ${mode}`}>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
          </ul>
          <p className='method'>{recipe.method}</p>
        </Fragment>
      }
    </div>
  )
}

export default Recipe