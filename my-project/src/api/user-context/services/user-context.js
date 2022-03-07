'use strict';

/**
 * user-context service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-context.user-context');
