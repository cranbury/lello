import Ember from 'ember';

var defaultTitle = "Default List";
var firstItem = Ember.Object.create({name: "first item", description: "---"});
var blankList = Ember.Object.create({title: defaultTitle, items: [firstItem]});

export default Ember.Controller.extend({
  lists: [blankList],
  isShowingModal: false,
  actions: {
    
    addList: function(){
      var blankItem = Ember.Object.create({name: "first item", description: "---"});
      let newList = Ember.Object.create({title: defaultTitle, items: [blankItem]});
      this.get("lists").pushObject(newList);
    },

    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    }
  }
});

document.addEventListener('mouseup', function clickAwayListener(e){
  var container = Ember.$(".fill");

  if (!container.is(e.target) && container.has(e.target).length === 0) // not targer or descendant
  {
    Ember.$('.item-save').click();
  }
});

