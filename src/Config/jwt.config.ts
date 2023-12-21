export const JWT_CONFIG = () => {
    return {
        JWT_SECREATE_KEY: process.env["JWT_SECREATE_KEY"],
        JWT_EXPIRED_TIME: process.env["JWT_EXPIRED_TIME"],
        IsAuth: {
            flag: true
        }
    }
}