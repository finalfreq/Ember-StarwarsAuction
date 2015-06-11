Torhus.AuctionController = Ember.ObjectController.extend ({
  actions: {
    delete: function () {
      if (confirm('Are you sure?')) {
        var products = this.get('products'),
          list = products.toArray();

        list.forEach(function(product) {
          product.destroyRecord();
          products.removeObject(product);
        });
        this.get('model').destroyRecord();
        this.transitionToRoute('auctions');
      }
    }
  }
});
