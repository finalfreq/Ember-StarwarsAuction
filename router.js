Torhus.Router.map(function() {
  this.resource('auctions', {path:'/'});
  this.resource('products');
  this.resource('product', {path:'products/:product_id'});
  this.resource('auction', {path:'auctions/:auction_id'});
  this.resource('new-item', {path:'auctions/:auction_id/new-item'});
  this.resource('new-auction');

});
