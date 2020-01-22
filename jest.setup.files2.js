const { appendFileSync } = require('fs');

appendFileSync(global.logPath, `setupFiles 2 in ${global.basename}\n`);
