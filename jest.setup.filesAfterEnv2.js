const { appendFileSync } = require('fs');

appendFileSync(global.logPath, `setupFilesAfterEnv 2 in ${global.basename}\n`);
