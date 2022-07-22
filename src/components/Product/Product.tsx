import ProductProps from './interface'


export default ({showProduct, image, name}: ProductProps) => {
   return <div className="categories__element"
               onClick={showProduct}>
      <img src={image} alt="product image"/>
      <div className="catalog-page__categories__element__category">
         <p className="catalog-page__categories__element__category__name">{name}</p>
      </div>
   </div>
}