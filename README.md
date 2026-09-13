# Yaa McCarthy's Collection — Online Catalogue

A mobile-friendly GitHub Pages product catalogue.

## Shop details
- Name: Yaa McCarthy's Collection
- Tagline: Style. Class. Luxury.
- Contact/WhatsApp: 0550 122 057
- Location: Obuasi – Asankore
- Hours: 8:00 AM – 10:00 PM
- Days: Monday – Saturday

## How to add products
Open `products.js`. Each product follows this structure:

{
  id: 9,
  name: "Example Perfume",
  category: "perfumes",
  price: 250,
  image: "images/example-perfume.jpg",
  description: "Short product description."
}

Put the product photo inside the `images` folder and use its exact filename in `image`.

For a product whose price should be negotiated or confirmed on WhatsApp, set `price: 0`.

## Publish with GitHub Pages
1. Create a GitHub repository.
2. Upload all files and the `images` folder.
3. Open repository Settings → Pages.
4. Choose deployment from the `main` branch and `/ (root)`.
5. Save and wait for the GitHub Pages URL.
