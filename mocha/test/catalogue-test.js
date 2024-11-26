import { expect } from "chai";
import { Catalogue } from "../src/catalogue.js";
import { Product } from "../src/product.js";

let cat = null;
let batch = null;

// Test data
const p123 = new Product("A123", "Product 1", 100, 10, 10.0);
const p124 = new Product("A124", "Widget 1", 100, 10, 10.0);
const p125 = new Product("A125", "A Product 2", 100, 10, 10.0);
const p126 = new Product("A126", "A Widget 2", 100, 10, 10.0);
const p127 = new Product("A127", "Bracket 1", 100, 10, 10.0);
const p128 = new Product("A128", "A Product 3", 100, 10, 10.0);
// Bad data
const duplicate = new Product("A124", "A Product 4", 100, 10, 10.0);
const noPriceProduct = new Product("A129", "Product 5", 100, 10);
const noNameProduct = new Product("A1210", undefined, 100, 10, 12.4);

describe("Catalogue", () => {
  beforeEach(() => {
    cat = new Catalogue("Test Catalogue");
  });
  describe("addProduct", function () {
    it("should return true for a valid product", function () {
        const result = cat.addProduct(p127);
        expect(result).to.be.true;
      });
    describe("The error cases", function () {
      beforeEach(() => {
        cat.addProduct(p123);
        cat.addProduct(p124);
      });
      it("should return false when the product's id is in use", function () {
        const result = cat.addProduct(duplicate);
        expect(result).to.be.false;
      });
      it("should return false when the product price is missing", function () {
        const result = cat.addProduct(noPriceProduct);
        expect(result).to.be.false;
      });
      it("should return false when the product name is not included", function () {
        const result = cat.addProduct(noNameProduct);
        expect(result).to.be.false;
      });
    });
  });
  describe("removeProductById", () => {
    beforeEach(() => {
      cat.addProduct(p123);
      cat.addProduct(p124);
      cat.addProduct(p125);
      cat.addProduct(p126);
    });
    it("should return the removed product when the id is valid", function () {
      let result = cat.removeProductById("A124");
      expect(result.id).to.equal("A124");
      // Check object state
      result = cat.findProductById("A124");
      expect(result).to.be.undefined;
    });
    it("should return undefined when the product id is invalid", function () {
      const result = cat.removeProductById("A321");
      expect(result).to.be.undefined;
    });
  });
});