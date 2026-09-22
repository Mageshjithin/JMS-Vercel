# JMS Textiles — complete website source

All product and cover images are included in images/. Sample images are optimized WebP; the supplied saree photo is included as JPEG.

## Run locally
Open index.html in your browser. Alternatively run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Deploy with GitHub and Vercel
1. Upload the contents of this folder to your GitHub repository root (not the ZIP itself).
2. In https://vercel.com/new import Mageshjithin/jms-textiles-fashion.
3. Choose framework Other, root directory ./, no build command, output directory . and deploy. vercel.json provides the static configuration.
4. Vercel displays your live URL. Once GitHub is connected, commits to the production branch trigger deployment automatically.

## Replace an existing product image
Replace the file at the exact path in products.js and commit it to GitHub. The website updates after a successful Vercel deployment. If you use a new filename, update img in products.js too.

## Add a new product
Copy an image into images/catalog/. Add an object to the products array in products.js, with a unique id:

```js
{
  id: "coffee-saree-02",
  name: "Coffee Brown Cotton Saree",
  cat: "Women",
  type: "Sarees",
  sizes: "Confirm on WhatsApp",
  old: 1500,
  price: 1100,
  tag: "New Arrivals",
  supplied: true,
  img: "images/catalog/my-new-saree.jpg"
}
```

Separate objects with commas. Category must be Women or Girls. Offer filters use New Arrivals, Trending, Festival, Offer, Best Seller. Use supplied:true for your actual products, false for illustrative samples.

Commit BOTH the image and products.js. Adding an unreferenced image alone does not create a product card. Files saved only on your computer do not change the live website. This is a static catalog, not an online upload/admin system.

## Change the cover
Change the cover-photo image src in index.html to your new image path. To update the Women collection banner, change the final .women-card rule in styles.css.

## Contact and Instagram
The active WhatsApp number is 9876543211 with country code 91, configured in catalog.js and shown in index.html. Edit both together. Replace the Instagram placeholder links in index.html with your profile URL.

## Files
index.html: page layout; styles.css: responsive styling; catalog.js: filtering, detail modal and WhatsApp actions; products.js: editable inventory; images/: bundled assets; vercel.json: static deployment settings.

The coffee brown saree is priced at 1500 original / 1100 offer. Other styles and prices are samples.
