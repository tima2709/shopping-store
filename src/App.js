import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getCategories, getFavorite, getProducts} from "./redux/Action/productAction";
import Header from "./components/Header/Header";
import FavoritePage from "./pages/FavoritePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [])

  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path={'/'} element={<HomePage/>}/>
              <Route path={'/category/:id'} element={<CategoryPage/>}/>
              <Route path={'/search/:name'} element={<SearchPage/>} />
              <Route path={'/favorite/'} element={<FavoritePage/>}/>
              <Route path={'/login/'} element={<LoginPage/>}/>
              <Route path={'/register/'} element={<RegisterPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
