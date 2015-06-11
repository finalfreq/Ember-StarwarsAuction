Torhus.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction', {
        name: this.get('name'),
        description: this.get('description'),
        date: this.get('date'),
        location: this.get('location'),
        curator: this.get('condition')
      });
        newAuction.save()
        this.transitionToRoute('auctions');
        this.set('name', " "),
        this.set('description', " "),
        this.set('date', " "),
        this.set('location', " "),
        this.set('curator', " ")
    }
  }
});
