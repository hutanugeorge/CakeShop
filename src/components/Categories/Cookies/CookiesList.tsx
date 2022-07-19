import CookiesInfo from '../../ProductsInfo/CookiesInfo'
import Cookies from './Cookies'
import { cookiesArray } from '../../constants/cookies'


export default () => {
   return <>
      <div className="category-list">
         {cookiesArray.map((cookie, id) => {
            const { type, image, info: { composition, recommendation, price } } = cookie
            return <Cookies key={id} type={type} image={image}
                            info={<CookiesInfo composition={composition}
                                               recommendation={recommendation}
                                               price={`${price} ron/kg`}/>}/>
         })}
      </div>

   </>
}