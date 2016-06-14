import Ember from 'ember';

var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  isExpanded: false, //default state
  showModal: false,
  editItem: firstItem,
  list: null,

  actions: {
    openModal: function(item) {
      this.set('editItem', item);
      this.set('showModal', true);
    },

    closeModal: function(){
      this.set('showModal', false);
    },

    delItem: function(){
      this.get("editItem").destroy();
      this.set('showModal', false);
      this.get("list").items.removeObject(this.get("editItem"));
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
