const assert = require('assert');
const app = require('../../src/app');

describe('\'brands\' service', () => {
  it('registered the service', () => {
    const service = app.service('brands');

    assert.ok(service, 'Registered the service');
  });
});
