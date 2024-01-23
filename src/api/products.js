export const colors = [
  { label: "Midnight Grey", value: "grey", price: 0, img: "color-grey.png" },
  { label: "Pearl White", value: "white", price: 30000, img: "color-white.png" },
  { label: "Solid Black", value: "black", price: 40000, img: "color-black.png" },
];

export const productsData = [
  {
    id: 1,
    name: "Volkswagen Golf",
    img: "golf-r-line1.png",
    color: colors,
    price: 1100000,
    models: [
      {
        grey: [
          {
            wheel_1: { src: "golf-grey-w16.png", value: "wheel_1" },
            wheel_2: { src: "golf-grey-w17.png", value: "wheel_2" },
          },
        ],
        white: [
          {
            wheel_1: { src: "golf-white-w16.png", value: "wheel_1" },
            wheel_2: { src: "golf-white-w17.png", value: "wheel_2" },
          },
        ],
        black: [
          {
            wheel_1: { src: "golf-black-w16.png", value: "wheel_1" },
            wheel_2: { src: "golf-black-w17.png", value: "wheel_2" },
          },
        ],
      },
    ],
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
    img: "t-roc1.png",
    color: colors,
    models: [
      {
        grey: [
          {
            wheel_1: { src: "troc-grey-w16.png", value: "wheel_1" },
            wheel_2: { src: "troc-grey-w17.png", value: "wheel_2" },
          },
        ],
        white: [
          {
            wheel_1: { src: "troc-white-w16.png", value: "wheel_1" },
            wheel_2: { src: "troc-white-w17.png", value: "wheel_2" },
          },
        ],
        black: [
          {
            wheel_1: { src: "troc-black-w16.png", value: "wheel_1" },
            wheel_2: { src: "troc-black-w17.png", value: "wheel_2" },
          },
        ],
      },
    ],
    price: 1200000,
    wheels: [
      {
        src: "troc/wheel16-troc.png",
        label: '16" Диски "Chester" R16',
        value: "wheel_1",
        price: 0,
      },
      {
        src: "troc/wheel17-troc.png",
        label: '17" Диски "Johannesburg" R17',
        value: "wheel_2",
        price: 40000,
      },
    ],
  },

  {
    id: 3,
    name: "Volkswagen Tiguan",
    img: "tiguan1.png",
    color: colors,
    price: 1600000,
    models: [
      {
        grey: [
          {
            wheel_1: { src: "tiguan-grey-w17.png", value: "wheel_1" },
            wheel_2: { src: "tiguan-grey-w19.png", value: "wheel_2" },
          },
        ],
        white: [
          {
            wheel_1: { src: "tiguan-white-w17.png", value: "wheel_1" },
            wheel_2: { src: "tiguan-white-w19.png", value: "wheel_2" },
          },
        ],
        black: [
          {
            wheel_1: { src: "tiguan-black-w17.png", value: "wheel_1" },
            wheel_2: { src: "tiguan-black-w19.png", value: "wheel_2" },
          },
        ],
      },
    ],
    wheels: [
      {
        src: "tiguan/wheel17-tiguan.png",
        label: '17" Диски "Montana" R17',
        value: "wheel_1",
        price: 0,
      },
      {
        src: "tiguan/wheel19-tiguan.png",
        label: '19" Диски "Victoria Falls" R19',
        value: "wheel_2",
        price: 40000,
      },
    ],
  },

  {
    id: 4,
    name: "Volkswagen Arteon",
    img: "arteon-r-line1.png",
    color: colors,
    price: 2000000,
    models: [
      {
        grey: [
          {
            wheel_1: { src: "arteon-grey-w18.jpg", value: "wheel_1" },
            wheel_2: { src: "arteon-grey-w20.jpg", value: "wheel_2" },
          },
        ],
        white: [
          {
            wheel_1: { src: "arteon-white-w18.jpg", value: "wheel_1" },
            wheel_2: { src: "arteon-white-w20.jpg", value: "wheel_2" },
          },
        ],
        black: [
          {
            wheel_1: { src: "arteon-black-w18.jpg", value: "wheel_1" },
            wheel_2: { src: "arteon-black-w20.jpg", value: "wheel_2" },
          },
        ],
      },
    ],
    wheels: [
      {
        src: "arteon/wheel18-arteon.jpg",
        label: '18" Диски "Almere Adamantium" R18',
        value: "wheel_1",
        price: 0,
      },
      {
        src: "arteon/wheel20-arteon.jpg",
        label: '20" Диски "Nashville" R20',
        value: "wheel_2",
        price: 40000,
      },
    ],
  },

  {
    id: 5,
    name: "Volkswagen Touareg",
    img: "touareg1.png",
    color: colors,
    price: 3000000,
    models: [
      {
        grey: [
          {
            wheel_1: { src: "touareg-grey-w20.png", value: "wheel_1" },
            wheel_2: { src: "touareg-grey-w21.png", value: "wheel_2" },
          },
        ],
        white: [
          {
            wheel_1: { src: "touareg-white-w20.png", value: "wheel_1" },
            wheel_2: { src: "touareg-white-w21.png", value: "wheel_2" },
          },
        ],
        black: [
          {
            wheel_1: { src: "touareg-black-w20.png", value: "wheel_1" },
            wheel_2: { src: "touareg-black-w21.png", value: "wheel_2" },
          },
        ],
      },
    ],
    wheels: [
      {
        src: "touareg/wheel20-touareg.png",
        label: '20" Диски "Braga" R20',
        value: "wheel_1",
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
