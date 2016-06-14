import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal: function(item) {
      this.sendAction('closeModal');
    }
  }
});
