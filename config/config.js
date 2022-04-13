require('dotenv').config()// instatiate environment variables

module.exports = {
    app: process.env.APP || 'dev',
    port: process.env.PORT || '3000',
    jwt_encryption: process.env.JWT_ENCRYPTION || 'jwt_please_change',
    jwt_expiration: process.env.JWT_EXPIRATION || '10000',
    "users": {
        "database": process.env.DEV_USERS_DB_NAME       || "users",
        "host":     process.env.DEV_USERS_DB_HOST       || "localhost",
    
    },
}
