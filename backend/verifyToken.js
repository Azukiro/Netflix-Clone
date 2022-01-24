import JWT from 'jsonwebtoken';


function verify(req, res, next) {
    const authHeader = req.headers.token;
    !authHeader && res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
        err && res.status(403).json({ message: 'Invalid token' });
        
        req.user = user;
        next();
    });

}

export default verify;