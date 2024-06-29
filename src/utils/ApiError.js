class ApiError extends Error {
    constructor(message="Something weng wrong", errors=[], statusCode, stack){

        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors;

        // production 

        if(stack){
            this.stack = stack

        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    } 
    
}

export {ApiError}