import { useEffect } from 'react'

import Footer from '../../components/Footer'
import MidSection from '../../components/MidSection'
import NavBar from '../../components/NavBar/NavBar'


export default () => {

   useEffect(() => {
      window.scrollTo({ top: 0 })
   },[])

   return (
      <>
         <NavBar/>
        <MidSection />
         {/*<Footer />*/}
      </>

   )
}