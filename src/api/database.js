const films = [
    {
      id: 1,
      image: "https://proyecto101.com/wp-content/uploads/2019/08/i7_2.jpg",
      category: "electronicaimportada",
      title: "Auricular i7",
    },
    {
      id: 2,
      image: "https://cf.shopee.com.ar/file/77bd0e4f651e7dbd7ec5582f28a764e4",
      category: "electronicaimportada",
      title: "Auricular i7 negro",
    },
    {
      id: 3,
      image:
        "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/7/5/75498_1.jpg",
      category: "electronicalocal",
      title: "Auricular i7 rosa",
    },
  ];

  export const getData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(films);
    }, 3000);
  });