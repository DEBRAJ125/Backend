class apiResponse {
    constructor(
        message = 'Operation completed successfully',
        statusCode,
        data

    ) {
        this.message = message;
        this.statusCode = statusCode < 400;
        this.data = data;

        this.success = true;
    }
}

export default apiResponse;