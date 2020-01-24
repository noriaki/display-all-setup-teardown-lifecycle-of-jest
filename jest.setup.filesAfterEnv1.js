const { appendFileSync } = require('fs');

appendFileSync(global.logPath, `setupFilesAfterEnv 1 in ${global.basename}\n`);
