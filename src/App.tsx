import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage'

export default () => {

   return (
      <>
         <Router>
            <Routes>
               <Route element={<LandingPage />} path={'/'} />
            </Routes>
         </Router>
      </>
   )
}
