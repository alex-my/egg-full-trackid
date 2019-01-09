'use strict';

const mock = require('egg-mock');

describe('test/full-trackid.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/full-trackid-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, fullTrackid')
      .expect(200);
  });
});
