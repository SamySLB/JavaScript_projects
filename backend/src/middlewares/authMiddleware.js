import jwt from 'jsonwebtoken';

export function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ erro: 'Token não informado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch {
    return res.status(401).json({ erro: 'Token inválido' });
  }
}

export function apenasAdmin(req, res, next) {
  if (req.usuario.role !== 'admin') {
    return res.status(403).json({ erro: 'Acesso negado' });
  }

  next();
}