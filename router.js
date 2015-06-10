Torhus.Router.map(function() {
  this.resource('products', {path:'/'});
  this.resource('product', {path:'products/:product_id'});
  this.resource('new-item');
});
