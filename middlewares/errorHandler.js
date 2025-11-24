const errorHandler = (err, req, res, next) => {
    console.log(err);
    
    let status = 500;
    let message = 'Internal server error';

    if (err.code === 'LIMIT_FILE_SIZE') {
        status = 400;
        message = 'File maksimal berukuran 5MB';
    }

    if (err.name === 'BadRequest') {
        status = 400;
        message = err.message;
    }

    if (err.name === 'Unauthorized') {
        status = 401;
        message = 'Invalid User ID or Password';
    }

    if (err.name === 'NotFound') {
        status = 404;
        message = err.message;
    }

    res.status(status).json({
        message
    });
};

module.exports = errorHandler;
