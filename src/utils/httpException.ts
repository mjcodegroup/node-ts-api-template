export default class HttpException extends Error {
    public readonly code: number;
    constructor(message: string, code: number) {
        super(message);
        this.code = code;
    }
}