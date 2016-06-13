import Ember from 'ember';

// var firstItem = Ember.Object.create({name: "first item", description: "---"});

export default Ember.Component.extend({
  isExpanded: false, //default state
  actions: {

    expand: function() {
      this.set('isExpanded', true);
      var comp = this;
      var doIt = function(){console.log("OOO"); comp.set('isExpanded', false); comp.sendAction("addItem")};

      document.addEventListener('mouseup', function clickAwayListener(e){
        var container = $(".fill");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
          doIt();
          document.removeEventListener('mouseup', clickAwayListener, true);
        }
      }, true);

      // document.addEventListener('mouseup', clickAwayListener, true);
    },

    addItem: function()
    {
      console.log("hit");
      let itemName = this.get('itemName');
      // let itemDescription = this.get('itemDescription');
      let item = Ember.Object.create({name: itemName, description: itemDescription});
      this.get('list').items.pushObject(item);
      this.set('isExpanded', false);
    },

    watchIsExpanded: function() {
      console.log("hitter");
      this.action('addItem');
    }.observes('isExpanded').on('init')
  }
});
