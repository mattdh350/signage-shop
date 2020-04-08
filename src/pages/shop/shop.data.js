const SHOP_DATA = [
  {
    id: 1,
    title: "Bestselling Samsung Smart Signage Displays",
    routeName: "samsung",
    color: "samsung-blue",
    items: [
      {
        id: 1,
        name: 'QBR Series 65"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qb-series/lh43qbrebgcxza/gallery/QB43R_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 750,
      },
      {
        id: 2,
        name: 'QBR Series 75"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qb-series/lh43qbrebgcxza/gallery/QB43R_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1000,
      },
      {
        id: 3,
        name: 'QBR Series 98"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qm-series/lh85qmnebgc-go/gallery/LH98QMNEBGC_001_Front_Black_12-06-18.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1600,
      },
      {
        id: 4,
        name: 'OHN Series 85"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/outdoor-and-window/oh-series/ohn-series-85-lh85ohnskgb-za/OH85N_001_Front_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1750,
      },
      {
        id: 5,
        name: 'OHN-D Series 85"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/outdoor-and-window/ohn-d-series/gallery/LH85OHNDKGB_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 3200,
      },
      {
        id: 5,
        name: 'OMN Series 46"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/outdoor-and-window/om-n-series/product_images/OMN_Gallery_1.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1100,
      },
      {
        id: 6,
        name: 'QPR-K Series 98" (8K)',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/qled/qp-series/gallery/QP82R-8K_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 80000,
      },
      {
        id: 7,
        name: 'QER Series 82"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qe-series/gallery/QE82R_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 2200,
      },
      {
        id: 8,
        name: 'QHR Series 55"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qh-series/qhr-series/LH43QHREBGCX_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1800,
      },
      {
        id: 9,
        name: 'QER Series 45"',
        imageUrl:
          "https://image-us.samsung.com/SamsungUS/samsungbusiness/products/displays/4k-uhd/qh-series/qhr-series/LH43QHREBGCX_001_Front_Black_600x600.jpg?$bu-pdp-image-desktop-jpg$",
        price: 1500,
      },
    ],
  },
  {
    id: 2,
    title: "Bestselling LG Smart Signage Displays",
    color: "lg-red",
    routeName: "lg",
    items: [
      {
        id: 1,
        name: 'UM3DF Series 49"',
        imageUrl:
          "https://www.lg.com/uk/images/business/md00061521/gallery/N01_medium09.jpg",
        price: 800,
      },
      {
        id: 2,
        name: 'UM3DF Series 55"',
        imageUrl:
          "https://www.lg.com/uk/images/business/md00061521/gallery/N01_medium09.jpg",
        price: 1100,
      },
      {
        id: 3,
        name: 'UM3DF Series 65"',
        imageUrl:
          "https://www.lg.com/uk/images/business/md00061521/gallery/N01_medium09.jpg",
        price: 1200,
      },
      {
        id: 4,
        name: 'XE4F Series 49"',
        imageUrl:
          "https://www.lg.com/uk/images/business/digital-signage/md07501075/gallery/medium01.jpg",
        price: 1450,
      },
      {
        id: 5,
        name: 'UH5F Series 55"',
        imageUrl:
          "https://www.lg.com/uk/business/images/information-display/digital-signage/BD00061561/gallery/medium01-COPY-1.jpg",
        price: 1000,
      },
      {
        id: 6,
        name: 'UH5F Series 65"',
        imageUrl:
          "https://www.lg.com/uk/business/images/information-display/digital-signage/BD00061561/gallery/medium01-COPY-1.jpg",
        price: 1650,
      },
      {
        id: 7,
        name: 'UH5F Series 98"',
        imageUrl:
          "https://www.lg.com/uk/business/images/information-display/digital-signage/BD00061561/gallery/medium01-COPY-1.jpg",
        price: 2200,
      },
    ],
  },
  {
    id: 3,
    title: "Bestselling Brightsign Signage Media Players",
    routeName: "brightsign",
    color: "brightsign-purple",
    items: [
      {
        id: 1,
        name: "Brightsign XT",
        imageUrl:
          "https://www.brightsign.biz/application/files/7015/2710/1198/XT1144-fancy.png",
        price: 900,
      },
      {
        id: 2,
        name: "Brightsign XD",
        imageUrl:
          "https://www.brightsign.biz/application/files/1215/2710/5507/XT1034-fancy.png",
        price: 750,
      },
      {
        id: 3,
        name: "Brightsign HD",
        imageUrl:
          "https://www.brightsign.biz/application/files/6415/4231/8196/HD1024-angle.png",
        price: 650,
      },
      {
        id: 4,
        name: "Brightsign OPS",
        imageUrl:
          "https://www.brightsign.biz/application/files/7714/8425/9256/opel-front-productOverview.png",
        price: 600,
      },
      {
        id: 5,
        name: "Brightsign LS",
        imageUrl:
          "https://www.brightsign.biz/application/files/1815/4231/8196/LS424-angle.png",
        price: 450,
      },
    ],
  },
  {
    id: 4,
    title: "Bestselling Windows Media Players",
    color: "sky-blue",
    routeName: "windows",
    items: [
      {
        id: 1,
        name: "Advantech DS-370",
        imageUrl:
          "https://www.assured-systems.com/uploads/large/products/advantech/ds-370/ds-370-whitebackground.jpg",
        price: 450,
      },
      {
        id: 2,
        name: "Nexcom NDiS B324R",
        imageUrl:
          "https://www.assured-systems.com/uploads/large/products/nexcom/b324r/8b3d9ca4-38f7-434d-b4e0-5bf6521e5732.jpg",
        price: 500,
      },
      {
        id: 3,
        name: "Fanless Compact Digital Signage Player",
        imageUrl:
          "https://www.assured-systems.com/uploads/large/products/giada/q30/giada_q30_front.jpg",
        price: 300,
      },
      {
        id: 4,
        name: "Nexcom NDiS B533 Fanless 4K",
        imageUrl:
          "https://www.assured-systems.com/product-images/c2884eb9-7c3c-4599-8b4a-3a53b321ed0c.jpg",
        price: 600,
      },
    ],
  },
  {
    id: 5,
    title: "Bestselling CMS Bundles",
    color: "orange",
    routeName: "cms-bundles",
    items: [
      {
        id: 1,
        name: "Signagelive 1 Year licence",
        imageUrl:
          "https://signagelive.com/wp-content/uploads/2015/03/SL_Color_onWhite_340.png",
        price: 125,
      },
    ],
  },
];

export default SHOP_DATA;
