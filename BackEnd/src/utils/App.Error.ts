import AppErrorCode from "../constants/app.ErrorCode";
import { HttpStatusCOde } from "../constants/http";

class AppError extends Error {
    constructor(
        public statusCode: HttpStatusCOde,
        public message: string,
        public errorCode?: AppErrorCode,
    ){
        super(message)
    }
}

if (!user) {
    throw new AppError()
}

new AppError(
    200,
    "msg"
    AppErrorCode.InvalidAccessToken
)

export default AppError;