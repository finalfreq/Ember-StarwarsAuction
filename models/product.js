Torhus.Product = DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  year: DS.attr(),
  price: DS.attr(),
  condition: DS.attr(),
  description: DS.attr(),
  backstory: DS.attr(),
  image: DS.attr(),
  auctions: DS.belongsTo('auction')
});
