import Ember from 'ember';

// var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  // items: [firstItem],
  actions: {
    addItem: function(){
      let itemName = this.get('itemName');
      let itemDescription = this.get('itemDescription');
      let item = Ember.Object.create({name: itemName, description: itemDescription})
      this.get('list').items.pushObject(item);
    }
  }
});
