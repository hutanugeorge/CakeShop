import { useState } from 'react'
import CakesInfo from '../../ProductsInfo/CakesInfo'

import Cakes from './Cakes'

export default () => {

   const [visibility, setVisible] = useState<boolean>(false)

   return <>
      <div onClick={() => setVisible(prev => !prev )}>
         <div className={`cake-list__tort-insiropat ${visibility ? 'cake-list__tort-insiropat__visible': ''}`}>
            <CakesInfo type={'Tort insiropat'} price={'65'} composition={['Ciocolata', 'Vanilie','Fructe']} recommendation={'*Recomandat pentru evenimente'} />
         </div>
      <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div >
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div>
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div>
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div>
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div>
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
      <div>
         <Cakes type={'Tort insiropat'} price={'60 ron/kg'} image={'./cake.avif'} path={'tort_insiropat'}/>
      </div>
   </>


}

