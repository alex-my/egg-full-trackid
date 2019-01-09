'use strict';

const uuid = require('uuid');

module.exports = (options, app) => {
    return async function trackId(ctx, next) {
        ctx.trackid = uuid.v1();
        await next();
    };
};