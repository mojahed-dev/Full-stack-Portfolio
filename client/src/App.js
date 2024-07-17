import {  useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import axios from "axios";
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Showloading, HideLoading, SetPortfolioData } from './redux/rootSlice';

function App() {
// Select state from the Redux store
const { loading, portfolioData } = useSelector((state) => state.root);
// Get the dispatch function to dispatch actions
const dispatch = useDispatch();

// Function to fetch portfolio data
  const getPortfolioData = async () => {
    try {
       // Dispatch action to show loading
      dispatch(Showloading(true));
     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/portfolio/get-portfolio-data`);
      // Dispatch action to set portfolio data
      dispatch(SetPortfolioData(response.data));
      console.log("data", response.data);
      dispatch(HideLoading());
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(HideLoading()); // Dispatch HideLoading action
    }
  }

  // useEffect to fetch data on component mount or when portfolioData changes
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
