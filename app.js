'use strict';

const assert = require('assert');

const MIDDLEWARE_NAME_TRACKID = 'trackId';

module.exports = app => {
    const {
        config,
    } = app;

    const index = config.coreMiddleware.indexOf(MIDDLEWARE_NAME_TRACKID);
    assert.equal(
        index,
        -1,
        `Duplication of middleware name found: ${MIDDLEWARE_NAME_TRACKID}. Rename your middleware other than "${MIDDLEWARE_NAME_TRACKID}" please.`
    );

    // 尽量放置在最前面
    config.coreMiddleware.unshift(MIDDLEWARE_NAME_TRACKID);
};