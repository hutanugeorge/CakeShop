import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CatalogPage from './pages/CatalogPage'
import LandingPage from './pages/LandingPage/LandingPage'

export default () => {

   return (
      <>
         <Router>
            <Routes>
               <Route element={<LandingPage />} path={'/'} />
               <Route element={<CatalogPage />} path={'/catalog'} />
            </Routes>
         </Router>
      </>
   )
}
