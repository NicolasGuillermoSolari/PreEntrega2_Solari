const products = [{
    id:"1",
    name:"2 cts de Patacón",
    price: 500,
    Category: "cobres",
    img:,
    stock:3,
    description:"Moneda argentina antigüa de Cobre"
},
{
    id:"2",
    name:"5 cts de Patacón",
    price: 750,
    Category: "cobres",
    img:,
    stock:6,
    description:"Moneda argentina antigüa de Cobre"
},
{
    id:"3",
    name:"1 de Patacón",
    price: 1200,
    Category: "plata",
    img:,
    stock:3,
    description:"Moneda argentina antigüa de Plata"
},
{
    id:"4",
    name:"10 ctas 1930",
    price: 400,
    Category: "niquel",
    img:,
    stock:8,
    description:"Moneda argentina antigüa de Niquel"
}];

export const getProducts= () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(product)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find (prod => prod.id === productId))
        },500)
    })
}