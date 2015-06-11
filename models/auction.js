Torhus.Auction = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  curator: DS.attr(),
  products: DS.hasMany('product', {async:true})
});
