const assert = require('assert');
const app = require('../../src/app');

describe('\'product_groups\' service', () => {
  it('registered the service', () => {
    const service = app.service('product_groups');

    assert.ok(service, 'Registered the service');
  });
});
