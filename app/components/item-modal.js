import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function() {
      this.sendAction('closeModal');
    },

    delItem: function() {
      this.sendAction("delItem");
    }
  }
});
