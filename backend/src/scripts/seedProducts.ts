// import mongoose from "mongoose";
// import Product from "../models/product.model";
// import { connectToDatabase } from "../config/db";

// import Product_03 from "../../../assets/images/Products/Product_03.png";
// import Product_04 from "../../../assets/images/Products/Product_04.png";
// import Product_05 from "../../../assets/images/Products/Product_05.png";

// const products = [
//   {
//     _id: "1",
//     image: Product_05,
//     rating: "2.0",
//     normalPrice: "€359",
//     title: "productSection_01.title_01",
//     description: "productSection_01.decription_01",
//     quantity: "25",
//     available: "productSection_01.available",
//     quantitySold: "5",
//     sold: "productSection_01.sold",
//     info: "productSection_01.info",
//   },
//   {
//     _id: "2",
//     image: Product_04,
//     rating: "2.5",
//     normalPrice: "€2799",
//     title: "productSection_01.title_02",
//     quantity: "30",
//     available: "productSection_01.available",
//     quantitySold: "15",
//     sold: "productSection_01.sold",
//     info: "productSection_01.info",
//   },
//   {
//     _id: "3",
//     image: Product_03,
//     rating: "3.5",
//     normalPrice: "€799",
//     title: "productSection_01.title_03",
//     quantity: "20",
//     available: "productSection_01.available",
//     quantitySold: "7",
//     sold: "productSection_01.sold",
//     info: "productSection_01.info",
//   },
// ];

// const seedProducts = async () => {
//   try {
//     await connectToDatabase();
//     await Product.deleteMany({});
//     await Product.insertMany(products);
//     console.log("Products seeded successfully");
//     process.exit(0);
//   } catch (error) {
//     console.error("Error seeding products:", error);
//     process.exit(1);
//   }
// };

// seedProducts();