import CookiesInfo from '../../ProductsInfo/CookiesInfo'
import Cookies from './Cookies'
import { cookiesArray } from '../../constants/cookies'


export default () => {
   return <>
      <div className="cookies-list">
         {cookiesArray.map((cookie) => {
            const { type, price, image, info: { composition, recommendation } } = cookie
            return <Cookies type={type} price={`${price} ron/kg`} image={image}
                            info={<CookiesInfo composition={composition}
                                               recommendation={recommendation}/>}/>
         })}
      </div>

   </>
}