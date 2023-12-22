import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class StudentSchema {

    @IsNumber()
    @IsNotEmpty()
    private _id: number;

    @IsNotEmpty()
    @IsString()
    @Length(3, 10, { message: "Name should be in between 3 to 10" })
    private _name: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 10, { message: "Name should be in between 3 to 10" })
    private _lastName: string;

    @IsEmail()
    private _email: string;

    @IsString()
    @Length(8, 20, { message: "Name should be greater then 8 character" })
    private _password: string
}