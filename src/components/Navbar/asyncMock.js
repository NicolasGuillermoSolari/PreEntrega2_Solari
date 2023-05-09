const Products = [
  {
    id: "1",
    name: "1 cts de Patacón",
    price: 500,
    Category: "cobres",
    img: "https://colnect.com/es/coins/coin/1023-1_Centavo-1881~1896_-_Moneda_Nacional_1st_circulation-Argentina",
    stock: 3,
    description: "Moneda argentina antigüa de Cobre",
  },
  {
    id: "2",
    name: "2 cts de Patacón",
    price: 750,
    Category: "cobres",
    img: "https://colnect.com/es/coins/coin/1033-2_Centavos-1881~1896_-_Moneda_Nacional_1st_circulation-Argentina",
    stock: 6,
    description: "Moneda argentina antigüa de Cobre",
  },
  {
    id: "3",
    name: "10 ctvs de Patacón",
    price: 1200,
    Category: "plata",
    img: "https://colnect.com/es/coins/coin/1047-10_Centavos-1881~1896_-_Moneda_Nacional_1st_circulation-Argentina",
    stock: 3,
    description: "Moneda argentina antigüa de Plata",
  },
  {
    id: "4",
    name: "5 pesos de Patacón",
    price: 1400,
    Category: "niquel",
    img: "https://colnect.com/es/coins/coin/18693-5_Pesos_1_Argentino-1881~1896_-_Moneda_Nacional_1st_circulation-Argentina",
    stock: 2,
    description: "Moneda argentina antigüa de Niquel",
  },
];

export const GetProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products);
    }, 500);
  });
};

export const GetProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Products.find((prod) => prod.id === productId));
    }, 500);
  });
};
