class ApiError {
    constructor(statusCode, error) {
        this.statusCode = statusCode;
        this.error = error;
        this.success = false;
        this.ok = false;
    }
}

export default ApiError;
