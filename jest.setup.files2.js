const debug = require('./src/logger')('jest:setupFiles');
const filename = require('path').basename(__filename);

debug('%s in context of {%s}', filename, global.basename);
