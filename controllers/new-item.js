Torhus.NewItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('product', {
        title: this.get('title'),
        owner: this.get('owner'),
        year: this.get('year'),
        price: this.get('price'),
        condition: this.get('condition'),
        description: this.get('description'),
        backstory: this.get('backstory'),
        image: this.get('image')
      });
        newItem.save()
        this.transitionToRoute('products');
        this.set('title', " "),
        this.set('owner', " "),
        this.set('year', " "),
        this.set('price', " "),
        this.set('condition', " "),
        this.set('description', " "),
        this.set('backstory', " "),
        this.set('image', " ")
    }
  }
});
