import Ember from 'ember';

var defaultTitle = "Default List";
var firstItem = Ember.Object.create({name: "first item", description: "---"});
var blankList = Ember.Object.create({title: defaultTitle, items: [firstItem]});

export default Ember.Controller.extend({
  lists: [blankList],
  actions: {
    addList: function(){
      var blankItem = Ember.Object.create({name: "first item", description: "---"});
      let newList = Ember.Object.create({title: defaultTitle, items: [blankItem]});
      this.get("lists").pushObject(newList);
    }
  }
});

document.addEventListener('mouseup', function clickAwayListener(e){
  var container = $(".fill");

  if (!container.is(e.target) // if the target of the click isn't the container...
    && container.has(e.target).length === 0) // ... nor a descendant of the container
  {
    $('.item-save').click();
  }
})