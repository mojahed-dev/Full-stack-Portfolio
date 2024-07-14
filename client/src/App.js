import {  useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import axios from "axios";
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Showloading, HideLoading, SetPortfolioData } from './redux/rootSlice';

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root) 
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(Showloading(true));
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(HideLoading());
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(HideLoading()); // Dispatch HideLoading action
    }
  }

  useEffect(() => {
   if(!portfolioData) {
    getPortfolioData();
   }
  }, [portfolioData]);



  return (
    <BrowserRouter>
    {loading && <Loader />}
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
