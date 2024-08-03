export const getProductCategories = async () => {
  return [
    {
      id: 1,
      name: 'Munchies',
      type: 'Snacks',
      image: require('../assets/images/munchies.jpg'),
    },
    {
      id: 2,
      name: 'Sweets',
      type: 'Snacks',
      image: require('../assets/images/sweets.jpg'),
    },
    {
      id: 3,
      name: 'Busicuits',
      type: 'Snacks',
      image: require('../assets/images/buiscuits.jpg'),
    },
    {
      id: 4,
      name: 'Cold Drinks',
      type: 'Drinks',
      image: require('../assets/images/colddrinks.jpg'),
    },
    {
      id: 5,
      name: 'Noodles',
      type: 'Snacks',
      image: require('../assets/images/Noodles.jpg'),
    },
    {
      id: 6,
      name: 'Tea, coffee',
      type: 'Drinks',
      image: require('../assets/images/tea.jpg'),
    },
    {
      id: 7,
      name: 'Hair Care',
      type: 'Beauty Care',
      image: require('../assets/images/haircare.jpg'),
    },
    {
      id: 8,
      name: 'Lipstick',
      type: 'Beauty Care',
      image: require('../assets/images/lipstik.jpg'),
    },
    {
      id: 9,
      name: 'Cleaning',
      type: 'Beauty Care',
      image: require('../assets/images/cleaning.jpg'),
    },
    {
      id: 10,
      name: 'Shampoo',
      type: 'Beauty Care',
      image: require('../assets/images/shampoo.jpg'),
    },
    {
      id: 11,
      name: 'EyeLiner',
      type: 'Beauty Care',
      image: require('../assets/images/eyeliner.jpg'),
    },
    {
      id: 12,
      name: 'Foundation',
      type: 'Beauty Care',
      image: require('../assets/images/foundation.jpg'),
    },
    // Add more categories
  ];
};

export const getLatestProducts = async () => {
  return [
    {
      id: 1,
      name: 'Munchies',
      type: 'Snacks',
      image: require('../assets/images/munchies.jpg'),
    },
    {
      id: 2,
      name: 'Sweets',
      type: 'Snacks',
      image: require('../assets/images/sweets.jpg'),
    },
    {
      id: 3,
      name: 'Busicuits',
      type: 'Snacks',
      image: require('../assets/images/buiscuits.jpg'),
    },
    {
      id: 4,
      name: 'Cold Drinks',
      type: 'Drinks',
      image: require('../assets/images/colddrinks.jpg'),
    },
    {
      id: 5,
      name: 'Noodles',
      type: 'Snacks',
      image: require('../assets/images/Noodles.jpg'),
    },
    {
      id: 6,
      name: 'Tea, coffee',
      type: 'Drinks',
      image: require('../assets/images/tea.jpg'),
    },
    {
      id: 7,
      name: 'Hair Care',
      type: 'Beauty Care',
      image: require('../assets/images/haircare.jpg'),
    },
    {
      id: 8,
      name: 'Lipstick',
      type: 'Beauty Care',
      image: require('../assets/images/lipstik.jpg'),
    },
    {
      id: 9,
      name: 'Cleaning',
      type: 'Beauty Care',
      image: require('../assets/images/cleaning.jpg'),
    },
    {
      id: 10,
      name: 'Shampoo',
      type: 'Beauty Care',
      image: require('../assets/images/shampoo.jpg'),
    },
    {
      id: 11,
      name: 'EyeLiner',
      type: 'Beauty Care',
      image: require('../assets/images/eyeliner.jpg'),
    },
    {
      id: 12,
      name: 'Foundation',
      type: 'Beauty Care',
      image: require('../assets/images/foundation.jpg'),
    },
    // Add more categories
  ];
};

export const getSubCategories = async name => {
  // Example data for demonstration purposes
  switch (name) {
    case 'Sweets':
      return [
        {
          id: 1,
          productname: 'Rasgulla',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv nvnv hhfgj jjgfw',
          name,
          price: 199,
          image: require('../assets/images/rasgulla.png'),
        },
        {
          id: 2,
          productname: 'Mithai',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 300,
          image: require('../assets/images/mithai.jpg'),
        },
      ];
    case 'Cold Drinks':
      return [
        {
          id: 1,
          productname: 'Coke',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 20,
          image: require('../assets/images/coke.jpg'),
        },
        {
          id: 2,
          productname: 'Pepsi',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 20,
          image: require('../assets/images/maza.jpg'),
        },
      ];
    case 'Munchies':
      return [
        {
          id: 1,
          productname: 'Kurkure',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv hjdg hwgqhgdyu jhghqa',
          name,
          price: 50,
          image: require('../assets/images/kurkure.jpg'),
        },
        {
          id: 2,
          productname: 'SolidMasti',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 20,
          image: require('../assets/images/solid.jpg'),
        },
      ];
    case 'Busicuits':
      return [
        {
          id: 1,
          productname: 'Parleg',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 10,
          image: require('../assets/images/parle.jpg'),
        },
        {
          id: 2,
          productname: 'bourbon',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 20,
          image: require('../assets/images/bourbon.jpg'),
        },
      ];
    case 'Noodles':
      return [
        {
          id: 1,
          productname: 'Maggi',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 10,
          image: require('../assets/images/maggi.jpg'),
        },
        {
          id: 2,
          productname: 'Pasta',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          price: 20,
          image: require('../assets/images/pasta.jpg'),
        },
      ];
    case 'Hair Care':
      return [
        {
          id: 1,
          productname: 'Shampoo',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          image: require('../assets/images/shampo.jpg'),
        },
        {
          id: 2,
          productname: 'Conditioner',
          description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
          name,
          image: require('../assets/images/conditioner.jpg'),
        },
      ];
    // Add more cases for other categories
    default:
      return [];
  }
};

export const searchProducts = async query => {
  const allProducts = [
    {
      id: 1,
      name: 'Snickers',
      price: 24,
      image: require('../assets/images/munchies.jpg'),
    },
    {
      id: 2,
      name: 'Sweets',
      type: 'Snacks',
      image: require('../assets/images/sweets.jpg'),
    },
    {
      id: 3,
      name: 'Busicuits',
      type: 'Snacks',
      image: require('../assets/images/buiscuits.jpg'),
    },
    {
      id: 4,
      name: 'Cold Drinks',
      type: 'Drinks',
      image: require('../assets/images/colddrinks.jpg'),
    },
    {
      id: 5,
      name: 'Noodles',
      type: 'Snacks',
      image: require('../assets/images/Noodles.jpg'),
    },
    {
      id: 6,
      name: 'Tea, coffee',
      type: 'Drinks',
      image: require('../assets/images/tea.jpg'),
    },
    {
      id: 7,
      name: 'Hair Care',
      type: 'Beauty Care',
      image: require('../assets/images/haircare.jpg'),
    },
    {
      id: 8,
      name: 'Lipstick',
      type: 'Beauty Care',
      image: require('../assets/images/lipstik.jpg'),
    },
    {
      id: 9,
      name: 'Cleaning',
      type: 'Beauty Care',
      image: require('../assets/images/cleaning.jpg'),
    },
    {
      id: 10,
      name: 'Shampoo',
      type: 'Beauty Care',
      image: require('../assets/images/shampoo.jpg'),
    },
    {
      id: 11,
      name: 'EyeLiner',
      type: 'Beauty Care',
      image: require('../assets/images/eyeliner.jpg'),
    },
    {
      id: 12,
      name: 'Foundation',
      type: 'Beauty Care',
      image: require('../assets/images/foundation.jpg'),
    },
    // Add more search results
  ];

  return allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
};

export const getProductDetails = async productId => {
  const products = [
    {
      id: 1,
      name: 'Munchies',
      type: 'Snacks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/munchies.jpg'),
    },
    {
      id: 2,
      name: 'Sweets',
      type: 'Snacks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/sweets.jpg'),
    },
    {
      id: 3,
      name: 'Busicuits',
      type: 'Snacks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/buiscuits.jpg'),
    },
    {
      id: 4,
      name: 'Cold Drinks',
      type: 'Drinks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/colddrinks.jpg'),
    },
    {
      id: 5,
      name: 'Noodles',
      type: 'Snacks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/Noodles.jpg'),
    },
    {
      id: 6,
      name: 'Tea, coffee',
      type: 'Drinks',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/tea.jpg'),
    },
    {
      id: 7,
      name: 'Hair Care',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/haircare.jpg'),
    },
    {
      id: 8,
      name: 'Lipstick',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/lipstik.jpg'),
    },
    {
      id: 9,
      name: 'Cleaning',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/cleaning.jpg'),
    },
    {
      id: 10,
      name: 'Shampoo',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/shampoo.jpg'),
    },
    {
      id: 11,
      name: 'EyeLiner',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/eyeliner.jpg'),
    },
    {
      id: 12,
      name: 'Foundation',
      type: 'Beauty Care',
      description: 'Adsadfhd rwreyw hjsghgv bsvdghv',
      price: 10,
      image: require('../assets/images/foundation.jpg'),
    },
    // Add more products here
  ];

  return products.find(product => product.id === productId);
};
