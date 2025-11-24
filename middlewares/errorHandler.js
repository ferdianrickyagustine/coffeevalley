const errorHandler = (error, req, res, next) => {
    console.log(error);
    
    let status = 500;
    let message = 'Internal server error';

    if (error.code === 'LIMIT_FILE_SIZE') {
        status = 400;
        message = 'File maksimal berukuran 5MB';
    }

    if (error.name === 'BadRequest') {
        status = 400;
        message = error.message;
    }

    if (error.name === 'Unauthorized') {
        status = 401;
        message = 'Invalid User ID or Password';
    }

    if (error.name === 'NotFound') {
        status = 404;
        message = error.message;
    }

    res.status(status).json({
        message
    });
};

module.exports = errorHandler;
