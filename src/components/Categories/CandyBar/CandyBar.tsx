import ImageSlider from '../../ImageSlider'


export default () => {

   const candyBarImagesSlides = [
      { url: 'https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg', title: '1' },
      { url: 'https://wp.wedme.ro/wp-content/uploads/2020/06/Flavius-Partan-056.jpg', title: '2' }
   ]

   return <div className="candy-bar">
      <p className="candy-bar__description">
         Candy barul aduce evenimentului dumneavoastra un plus de stil, o placere aparte si uneori
         chiar si o doza de mister ce atrage curiosii la un loc.
      </p>
      <div className="candy-bar__images">
         <ImageSlider slides={candyBarImagesSlides}/>
      </div>
   </div>
}