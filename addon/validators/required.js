import Ember from 'ember';
import Base from 'ember-validator/validators/validator';
import Messages from 'ember-validator/messages';

export default Base.extend({
  init: function() {
    this._super();
    if (typeof(this.options) !== 'object') {
      this.set('options', {});
    }

    if (!this.options.message) {
      this.set('options.message', Messages.render('required', this.options));
    }
  },

  perform: function() {
    var value = this.model.get(this.property);
    if (Ember.isBlank(value)) {
      this.errors.pushObject(this.options.message);
    }
  }
});
