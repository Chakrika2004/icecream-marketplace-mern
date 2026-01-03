import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: 'Not Authorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded?.id) {
      return res.json({ success: false, message: 'Not Authorized' });
    }

    // FIX: attach user object properly
    req.user = { id: decoded.id };

    next();

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
