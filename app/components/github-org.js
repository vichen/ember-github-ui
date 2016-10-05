import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  action: {
    favoriteWasClicked() {
      this.sendAction('on-fav-clicked', this.get('org'))
    }
  }
});
