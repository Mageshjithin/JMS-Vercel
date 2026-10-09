// Edit product details here. Images are relative to index.html.
const products = [
  {
    "cat": "Women",
    "type": "Sarees",
    "id": "women-sarees",
    "name": "Kanchi Cotton Saree – Coffee Brown",
    
    "tag": "Offer",
    "sizes": "Confirm on WhatsApp",
    "img": "kanchi-cotton-coffee-brown.jpeg",
    "supplied": true
  },
   {
    "cat": "Women",
    "type": "Sarees",
    "id": "women-sarees",
    "name": "Kanchi Cotton Saree",
    "sizes": "Confirm on WhatsApp",
    "img": "download (1).webp",
    "supplied": true
  },
  {
    "cat": "Women",
    "type": "Sarees",
    "id": "women-sarees",
    "name": "Kanchi Cotton Saree",
    "sizes": "Confirm on WhatsApp",
    "img": "download.webp",
    "supplied": true
  },
  {
    "cat": "Women",
    "type": "Kurtis",
    "id": "women-kurtis",
    "name": "Noor Embroidered Kurti",
    
    "tag": "Trending",
    "sizes": "S, M, L, XL",
    "img": "women-kurtis.webp"
  },
  {
    "cat": "Women",
    "type": "Churidars",
    "id": "women-churidars",
    "name": "Jasmine Churidar Set",
    
    "tag": "New Arrivals",
    "sizes": "S, M, L, XL",
    "img": "women-churidars.webp"
  },
  {
    "cat": "Women",
    "type": "Salwar Suits",
    "id": "women-salwar-suits",
    "name": "Vanya Ethnic Salwar Set",
    
    "tag": "Best Seller",
    "sizes": "S, M, L, XL",
    "img": "women-salwar-suits.webp"
  },
  {
    "cat": "Women",
    "type": "Anarkali Dresses",
    "id": "women-anarkali-dresses",
    "name": "Meher Floral Anarkali",
    "tag": "New Arrivals",
    "sizes": "S, M, L, XL",
    "img": "women-anarkali-dresses.webp"
  },
  {
    "cat": "Women",
    "type": "Gowns",
    "id": "women-gowns",
    "name": "Ira Evening Gown",
  
    "tag": "New Arrivals",
    "sizes": "S, M, L, XL",
    "img": "women-gowns.webp"
  },
  {
    "cat": "Women",
    "type": "Tops",
    "id": "women-tops",
    "name": "Everyday Cotton Top",
    
    "tag": "Trending",
    "sizes": "S, M, L, XL",
    "img": "women-tops.webp"
  },
  {
    "cat": "Women",
    "type": "Leggings",
    "id": "women-leggings",
    "name": "Essential Stretch Leggings",
   
    "tag": "Offer",
    "sizes": "S, M, L, XL",
    "img": "women-leggings.webp"
  },
  {
    "cat": "Women",
    "type": "Nightwear",
    "id": "women-nightwear",
    "name": "Cloud Cotton Nightwear Set",
    
    "tag": "Offer",
    "sizes": "S, M, L, XL",
    "img": "women-nightwear.webp"
  },
  {
    "cat": "Women",
    "type": "Casual Wear",
    "id": "women-casual-wear",
    "name": "Weekend Casual Dress",
    "tag": "Trending",
    "sizes": "S, M, L, XL",
    "img": "women-casual-wear.webp"
  },
  {
    "cat": "Women",
    "type": "Party Wear",
    "id": "women-party-wear",
    "name": "Ruby Celebration Dress",
    "tag": "Offer",
    "sizes": "S, M, L, XL",
    "img": "women-party-wear.webp"
  },
  {
    "cat": "Women",
    "type": "Ethnic Wear",
    "id": "women-ethnic-wear",
    "name": "Heritage Ethnic Set",
    
    "tag": "Festival",
    "sizes": "S, M, L, XL",
    "img": "women-ethnic-wear.webp"
  },
  // {
  //   "cat": "Girls",
  //   "type": "Frocks",
  //   "id": "girls-frocks",
  //   "name": "Daisy Cotton Frock",
  //   "tag": "New Arrivals",
  //   "sizes": "2–10 Years",
  //   "img": "girls-frocks.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Party Frocks",
  //   "id": "girls-party-frocks",
  //   "name": "Mithra Party Frock",
  //   "tag": "Offer",
  //   "sizes": "2–10 Years",
  //   "img": "girls-party-frocks.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Traditional Dresses",
  //   "id": "girls-traditional-dresses",
  //   "name": "Little Lotus Traditional Set",
  //   "tag": "Festival",
  //   "sizes": "2–10 Years",
  //   "img": "girls-traditional-dresses.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Lehenga Choli",
  //   "id": "girls-lehenga-choli",
  //   "name": "Aarna Festive Lehenga",
  //   "price": 999,
  //   "old": 1299,
  //   "tag": "Festival",
  //   "sizes": "2–10 Years",
  //   "img": "girls-lehenga-choli.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Pattu Pavadai",
  //   "id": "girls-pattu-pavadai",
  //   "name": "Nila Pattu Pavadai",
  //   "price": 1299,
  //   "old": 1599,
  //   "tag": "Festival",
  //   "sizes": "2–10 Years",
  //   "img": "girls-pattu-pavadai.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Gowns",
  //   "id": "girls-gowns",
  //   "name": "Starshine Girls Gown",
  //   "price": 1199,
  //   "old": 1499,
  //   "tag": "Best Seller",
  //   "sizes": "2–10 Years",
  //   "img": "girls-gowns.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Tops & Bottom Sets",
  //   "id": "girls-tops-bottom-sets",
  //   "name": "Sunny Day Top & Bottom Set",
  //   "price": 699,
  //   "old": 999,
  //   "tag": "Trending",
  //   "sizes": "2–10 Years",
  //   "img": "girls-tops-bottom-sets.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Casual Dresses",
  //   "id": "girls-casual-dresses",
  //   "name": "Playday Cotton Dress",
  //   "tag": "New Arrivals",
  //   "sizes": "2–10 Years",
  //   "img": "girls-casual-dresses.webp"
  // },
  // {
  //   "cat": "Girls",
  //   "type": "Festive Dresses",
  //   "id": "girls-festive-dresses",
  //   "name": "Golden Bloom Festive Dress",
  //   "tag": "Festival",
  //   "sizes": "2–10 Years",
  //   "img": "girls-festive-dresses.webp"
  // },
  {
  "cat": "Women",
  "type": "Salwar Suits",
  "id": "sage-green-embroidered-set",
  "name": "Sage Green Embroidered Set",
  "tag": "New Arrival",
  "sizes": "Confirm on WhatsApp",
  "img": "Sage Green Embroidered Kurti Set.png",
  "supplied": true
}
];
