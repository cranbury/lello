import Ember from 'ember';

export default Ember.Controller.extend({
  lists: ["polar", "brown"],
  actions: {
    addList: function(){
      let listName = this.get('listName');
      this.get('lists').pushObject(listName);
    }
  }
});
