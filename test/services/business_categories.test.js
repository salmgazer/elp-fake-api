const assert = require('assert');
const app = require('../../src/app');

describe('\'business_categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('business_categories');

    assert.ok(service, 'Registered the service');
  });
});
