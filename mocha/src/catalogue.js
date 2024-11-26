export class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  findProductById(id) {
    const match = this.products.find((product) => id === product.id);
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id) && product.name && product.price) {
      this.products.push(product);
      return true;
    }
    return false;
  }

  removeProductById(id) {
    beforeEach(() => {
      cat = new Catalogue("Test Catalogue");
      cat.addProduct(p123);
      cat.addProduct(p124);
      cat.addProduct(p125);
      cat.addProduct(p126);
    });
    const removedProduct = this.findProductById(id);
    if (removedProduct) {
      this.products = this.products.filter(
        (product) => product.id !== id 
      );
    }
    return removedProduct;
  }

}

