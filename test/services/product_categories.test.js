const assert = require('assert');
const app = require('../../src/app');

describe('\'product_categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('product_categories');

    assert.ok(service, 'Registered the service');
  });
});
