import productImgItem from '../assets/img/01.jpg';
import productPrevImg1 from '../assets/img/01_prev.jpg';
import productPrevImg2 from '../assets/img/02_prev.jpg';
import productPrevImg3 from '../assets/img/03_prev.jpg';

export const products = [
  {
    id: '01',
    img: productImgItem,
    prev: [
      productPrevImg1,
      productPrevImg2,
      productPrevImg3,
    ],
    title: 'Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir Necklace',
    length: '60 CM (24 INCHES)',
    price: 29.95,
    discountPrice: 19.95,
    quantity: 1,
    descTitle: 'Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!',
    desc: 'The Kings chain was worn by Viking kings as a status symbol as the name applies. This is a 100% handmade Stainless Steel Chain. The crafting is a very time consuming process to put together the chain link by  link.  The hand made chain connects together with a lobster clamp.',
  },
  {
    id: '02',
    img: 'http://placehold.it/659x524',
    prev: [
      'http://placehold.it/64x64"',
      'http://placehold.it/64x64"',
      'http://placehold.it/64x64"',
      'http://placehold.it/64x64"',
    ],
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    length: '60 CM (24 INCHES)',
    price: 39.95,
    discountPrice: 29.95,
    quantity: 1,
    descTitle: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    desc: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  }
];