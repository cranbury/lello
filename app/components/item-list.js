import Ember from 'ember';

// var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  isExpanded: false, //default state

  actions: {
    openModal: function(modalName) {
      console.log(modalName);
      this.sendAction('openModal',modalName);
    },

    expand: function() {
      this.set('isExpanded', true);
    },

    addItem: function()
    {
      let itemName = this.get('itemName');

      let item = Ember.Object.create({name: itemName});
      this.get('list').items.pushObject(item);
      this.set('isExpanded', false);
    }
  }
});
