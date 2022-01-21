export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
}

export const products = [
  {
    id: 1,
    name: 'Mouse Razer',
    price: 799,
    description: 'Melhor mouse para jogos de FPS',
    imageURL: 'assets/images/mouseRazer.jpg'
  },
  {
    id: 2,
    name: 'Mouse Redragon',
    price: 699,
    description: 'Melhor mouse para jogos de MMO',
    imageURL: 'assets/images/mouseRedragon.jpg'
  },
  {
    id: 3,
    name: 'Mouse Hyperx',
    price: 299,
    description: '',
    imageURL: 'assets/images/mouseHyperx.jpg'
  }
];