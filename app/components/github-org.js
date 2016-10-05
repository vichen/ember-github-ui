import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({
  tagName: 'li',
  favorites: Ember.inject.service(),
  isFavorited: isInArray('org', 'favorites.items'),
  action: {
    favoriteClicked() {
      this.sendAction('on-fav-clicked', this.get('org'))
    }
  }
});
