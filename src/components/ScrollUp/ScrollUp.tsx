import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import TopArrowIcon from '../../icons/TopArrowIcon'


export default () => {

   const [ visible, setVisible ] = useState<boolean>(false)

   const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
   const { y: pageYOffset } = useWindowScroll()

   useEffect(() => {
      pageYOffset > 800 ? setVisible(true) : setVisible(false)
   }, [ pageYOffset ])

   return <div className={`scroll-up-button ${visible ? 'scroll-up-button__visible' : ''}`}
               onClick={() => scrollToTop()}>
      <TopArrowIcon/>
   </div>
}