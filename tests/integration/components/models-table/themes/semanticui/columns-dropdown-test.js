import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('models-table/themes/semanticui/columns-dropdown', 'Integration | Component | models table/themes/semanticui/columns dropdown', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{models-table/themes/semanticui/columns-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#models-table/themes/semanticui/columns-dropdown}}
      template block text
    {{/models-table/themes/semanticui/columns-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
