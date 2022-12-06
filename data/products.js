import Shop1 from '../public/assets/images/Shop1.png'
import Shop2 from '../public/assets/images/Shop2.png'
import Shop3 from '../public/assets/images/Shop3.png'
import Shop4 from '../public/assets/images/Shop4.png'
import Shop5 from '../public/assets/images/Shop5.png'
import Shop6 from '../public/assets/images/Shop6.png'
import Shop7 from '../public/assets/images/Shop7.png'
import Shop8 from '../public/assets/images/Shop8.png'
import Shop9 from '../public/assets/images/Shop9.png'

const products = [
    {
        image: Shop1,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop2,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop3,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop4,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop5,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop6,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop7,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop8,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
    {
        image: Shop9,
        title: "'Balance' Vase",
        price: 79.99,
        details: 'Beautiful hand-made vase with the most gorgeous thick brown matte glaze.\n This piece is handmade in stoneware clay and one of a kind.',
        material: 'Stoneware clay; matte glaze',
        color: 'Brown',
        measurements: '35x20 cm' 
    },
]

export default products.map((product, index) => ({ ...product, id: index + 1 }))