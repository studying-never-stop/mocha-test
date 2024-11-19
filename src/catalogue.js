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

}
