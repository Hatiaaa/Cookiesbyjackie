const jwt = require('jsonwebtoken');

module.exports = function requireCustomerAuth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado' });
  }

  const token = header.slice(7);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'customer') {
      return res.status(401).json({ error: 'No autorizado' });
    }
    req.customer = { customerId: payload.customerId };
    next();
  } catch {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
