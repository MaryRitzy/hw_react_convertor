export type Product = {
    id: number
    title: string
    description: string
    currency: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: 'This is iPhone 12...',
        currency: 'EUR',
        price: 750,
        image:'/image/iphone-black.webp',
    },

    {
        id: 2,
        title: 'iPhone 8',
        description: 'This is iPhone 8...',
        currency: 'EUR',
        price: 850,
        image:'/image/iphone-violet.webp',
    },

    {
        id: 3,
        title: 'iPhone X',
        description: 'This is iPhone X...',
        currency: 'EUR',
        price: 1250,
        image:'/image/iphone-red.webp',
    },


]


export const getProductsObject = (array:Product[]) => array.reduce((object, product) => ({
    ...object,
    [product.id]: product,
}),{})



export default productsArray
