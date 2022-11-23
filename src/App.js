import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css';

import { useTheme } from './hooks/useTheme';

const App = () => {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="search" element={<Search />} />
            <Route path="/recipes/:id" element={<Recipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
