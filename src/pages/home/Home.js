import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
// styles
import './Home.css';

// components
import RecipeList from '../../components/recipe-list/RecipeList';
import { useTheme } from '../../hooks/useTheme';

const Home = () => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)
  const { mode } = useTheme();

  useEffect(() => {
    setIsPending(true)

    const unsubscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
      if(snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false);
      } else {
        let results = [];
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setData(results);
        setIsPending(false);
      }
    }, (err) => {
      setError(err.message);
      setIsPending(false);
    })

    return () => unsubscribe();
  }, [])
  return (
    <div className='home'>
      {error && <p className={`error ${mode}`}>{error}</p>}
      {isPending && <p className={`loading ${mode}`}>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}

export default Home