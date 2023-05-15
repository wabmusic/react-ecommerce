import imgWoodenCart from '../assets/images/woodencart.jpg';
import imgShovel from '../assets/images/shovel.jpg';
import imgFudgicles from '../assets/images/fudgicles.jpg';
import imgFirewood from '../assets/images/firewood.jpg';

export class Product {
    name = "";
    description = "";
    price = 0;
    img = "";
}

export const products = [
    {name : 'Wooden Wagon', description : '4 wheel wagon built from the finest of wood', price : 79.99, img : imgWoodenCart},
    {name : 'Shovel', description : 'Square bladed metal shovel with handle built from the finest of wood', price : 23.99, img : imgShovel},
    {name : '12Pk Fudgicles', description : '12 Delicious frozen desserts on stick built from the finest of wood', price : 8.99, img : imgFudgicles},
    {name : 'Firewood Bundle', description : '50lb bundle of firewood sourced from the finest of wood', price : 12.99, img : imgFirewood}
]