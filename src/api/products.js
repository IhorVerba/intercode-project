export const colors = [
  { label: "Midnight Grey", value: "grey", price: 0, img: "color-grey.png" },
  { label: "Pearl White", value: "white", price: 30000, img: "color-white.png" },
  { label: "Solid Black", value: "black", price: 40000, img: "color-black.png" },
];

export const productsData = [
  {
    id: 1,
    name: "Volkswagen Golf",
    img: "golf-r-line.png",
    imgConfig: 'golf-grey-w16.png',
    color: colors,
    price: 1100000,
    wheels: [
      {
        src: "golf/wheel16-golf.png",
        label: '16" Диски "Norfolk" R16',
        value: "wheel_1",
        price: 0,
      },
      {
        src: "golf/wheel17-golf.png",
        label: '17" Диски "Ventura" R17',
        value: "wheel_2",
        price: 40000,
      },
    ],
  },
  {
    id: 2,
    name: "Volkswagen T-Roc",
    img: "t-roc.png",
    imgConfig: 'troc-grey-w16.png',
    color: colors,
    price: 1200000,
    wheels: [
      {
        src: "troc/wheel16-troc.png",
        label: '16" Диски "Chester" R16',
        value: "",
        price: 0,
      },
      {
        src: "troc/wheel17-troc.png",
        label: '17" Диски "Johannesburg" R17',
        value: "",
        price: 40000,
      },
    ],
  },
  {
    id: 3,
    name: "Volkswagen Tiguan",
    img: "tiguan.png",
    imgConfig: 'tiguan-grey-w17.png',
    color: colors,
    price: 1600000,
    wheels: [
      {
        src: "tiguan/wheel17-tiguan.png",
        label: '17" Диски "Montana" R17',
        value: "",
        price: 0,
      },
      {
        src: "tiguan/wheel19-tiguan.png",
        label: '19" Диски "Victoria Falls" R19',
        value: "",
        price: 40000,
      },
    ],
  },
  {
    id: 4,
    name: "Volkswagen Arteon",
    img: "arteon-r-line.png",
    imgConfig: 'arteon-grey-w18.jpg',
    color: colors,
    price: 2000000,
    wheels: [
      {
        src: "arteon/wheel18-arteon.jpg",
        label: '18" Диски "Almere Adamantium" R18',
        value: "",
        price: 0,
      },
      {
        src: "arteon/wheel20-arteon.jpg",
        label: '20" Диски "Nashville" R20',
        value: "",
        price: 40000,
      },
    ],
  },
  {
    id: 5,
    name: "Volkswagen Touareg",
    img: "touareg.png",
    imgConfig: 'touareg-grey-w18.png',
    color: colors,
    price: 3000000,
    wheels: [
      {
        src: "touareg/wheel20-touareg.png",
        label: '20" Диски "Braga" R20',
        value: "",
        price: 0,
      },
      {
        src: "touareg/wheel21-touareg.png",
        label: '21" Диски "Leeds" R21',
        value: "wheel_2",
        price: 40000,
      },
    ],
  },
];


export const initialConfig = {
  1: {
    car: "long_range_plus",
    model: "",
    color: "white",
    wheels: "",
  }
};