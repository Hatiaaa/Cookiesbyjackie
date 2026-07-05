// Genera el hash del password de admin para poner en .env
// Uso: node hash-password.js <tu-password>
const bcrypt = require('bcryptjs');
const password = process.argv[2];
if (!password) {
  console.log('Uso: node hash-password.js <tu-password>');
  process.exit(1);
}
bcrypt.hash(password, 10).then(hash => {
  console.log('\nPon esto en tu .env:\n');
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
});
