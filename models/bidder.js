Torhus.Bidder = DS.Model.extend({
  firstname: DS.attr(),
  lastname: DS.attr(),
  items: DS.attr(),
  product: DS.hasMany('product', {async: true}),


});
