const { appendFileSync } = require('fs');

appendFileSync(global.logPath, `setupFiles 1 in ${global.basename}\n`);
