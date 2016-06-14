import Ember from 'ember';

var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  itemExpanded: false,
  nameExpanded: false,
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

    changeName: function() {
      this.set("nameExpanded", true);
    },

    saveName: function() {
      this.set("nameExpanded", false);
    },

    expand: function() {
      this.set('itemExpanded', true);
    },

    addItem: function()
    {
      let itemName = this.get('itemName');

      let item = Ember.Object.create({name: itemName});
      this.get('list').items.pushObject(item);
      this.set('itemExpanded', false);
    }
  }
});
