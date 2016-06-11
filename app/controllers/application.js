import Ember from 'ember';

var blankList = Ember.Object.create({title: "Default List"});

export default Ember.Controller.extend({
  lists: [blankList]
});
