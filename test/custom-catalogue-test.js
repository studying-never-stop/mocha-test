import {Catalogue} from "../src/catalogue.js";
import {Product} from "../src/product.js";

// Test data
let cat = new Catalogue("Test Catalogue");
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0)
const p128 = new Product("A128", "A Product 3", 100, 10, 10.0);
// Bad data
const duplicate = new Product("A124", "A Product 4", 100, 10, 10.0);
const noPriceProduct = new Product("A129", "Product 5", 100, 10);
const noNameProduct = new Product("A1210", undefined, 100, 10, 12.4);

let response

console.log('Test - addProduct')
console.log("\tWhen we add a valid product, then it should return true")
response = cat.addProduct(p123);
// Expectation
if (response === true)
  console.log('\t\tPassed')
else
  console.log('\t\tfailed')

//   ==================================

cat.addProduct(p124);
cat.addProduct(p125);
cat.addProduct(p126);

console.log("\tWhen we add a product whose id is in use, then it should return false")
response = cat.addProduct(duplicate);
// Expectation
if (response === false)
  console.log('\t\tPassed')
else
  console.log('\t\tfailed')


//   ==================================

console.log("\tWhen we add a product with no price, then it should return false")
response = cat.addProduct(noPriceProduct);
// Expectation
if (response === false)
  console.log('\t\tPassed')
else
  console.log('\t\tfailed')

//   ==================================

console.log("\tWhen we add a product with no name, then it should return false")
response = cat.addProduct(noNameProduct);
// Expectation
if (response === false)
  console.log('\t\tPassed')
else
  console.log('\t\tfailed')