export class MyException extends Error {
    constructor(EXP_MSG: string) { super("user not found" || EXP_MSG) }
}