class apiError extends Error {
    constructor(
        message = 'An error occurred', 
        statusCode,
        error=[],
        stackTrace=""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.data=null;
        this.success=false;
            if (stackTrace) {
                this.stack = stackTrace;
            }
            else {
                Error.captureStackTrace(this, this.constructor);
            }


    }
}

export default apiError;