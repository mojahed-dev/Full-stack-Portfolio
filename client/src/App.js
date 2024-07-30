import {  useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import axios from "axios";
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { Showloading, HideLoading, SetPortfolioData, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
// import 'antd/dist/antd.min.css';

function App() {
// Select state from the Redux store
const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
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
      dispatch(ReloadData(false));
      // console.log("data", response.data);
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

  useEffect(() => {
    if(reloadData) {
      getPortfolioData();
     }
    }, [reloadData]);
  



  return (
    <BrowserRouter>
    {loading && <Loader />}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/admin' element={ <Admin /> } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
