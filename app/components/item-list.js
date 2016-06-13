import Ember from 'ember';

// var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  isExpanded: false, //default state
  addOne: false,

  watchIsExpanded: function() {
    if(this.addOne){
      this.actions.addItem();
      Ember.set(this.addOne, false);
    };
  }.observes('addOne').on('init'),

  actions: {

    expand: function() {
      this.set('isExpanded', true);
      var comp = this;
      var queueOne = function(){
        comp.set('isExpanded', false);
        comp.set('addOne', true);
      };

      document.addEventListener('mouseup', function clickAwayListener(e){
        var container = $(".fill");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
          queueOne();
          document.removeEventListener('mouseup', clickAwayListener, true);
        }
      }, true);

    },

    addItem: function()
    {
      console.log(this);
      let itemName = this.get('itemName');
      // let itemDescription = this.get('itemDescription');
      let item = Ember.Object.create({name: itemName, description: itemDescription});
      this.get('list').items.pushObject(item);
      this.set('isExpanded', false);
    }
  }
});
