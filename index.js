// this can be trashed ... used to test eslint settings
const fs = require('fs');

async function main() {
  const data = await fs.open('.nvmrc');
  console.log(data);

  const a = { thing: 123 };
  const b = { thing: 234, ...a };
}

if (process.mainModule === module) {
  main();
}
