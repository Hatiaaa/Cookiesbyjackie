const jwt = require('jsonwebtoken');

// No bloquea la petición nunca (permite checkout como invitado).
// Si viene un token de cliente válido, adjunta req.customer = { customerId }.
module.exports = function optionalCustomerAuth(req, _res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) return next();

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role === 'customer') {
      req.customer = { customerId: payload.customerId };
    }
  } catch {
    // Token inválido o expirado: se ignora, sigue como invitado.
  }
  next();
};
