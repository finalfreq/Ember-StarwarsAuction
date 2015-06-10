Torhus.Products = Ember.Route.extend ({
  model: function() {
    return this.store.find('product')
  }
});
