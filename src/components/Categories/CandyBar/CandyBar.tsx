import { candyBarArray } from '../../constants/candyBar'


export default () => {
   return <div className="candy-bar">
      <div className="candy-bar__header">
         <p className="candy-bar__header__title">Candy Bar</p>
         <hr className="horizontal-line"/>
      </div>
      <p className="candy-bar__description">
         Candy barul aduce evenimentului dumneavoastra un plus de stil, o placere aparte si uneori
         chiar si o doza de mister ce atrage curiosii la un loc.
      </p>
      <div className="candy-bar__images">
         {candyBarArray.map((candy) => <img src={candy} alt="candy"/>)}
      </div>
   </div>
}