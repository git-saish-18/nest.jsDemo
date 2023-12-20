import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class StudentSchema {
    @IsString()
    @Length(3, 10, { message: "string length is in between 3 to 10 character" })
    @IsNotEmpty({ message: "String should not empty" })
    Name: string;

    @IsEnum(['FY', 'SE', 'TE', "BE"], { message: "Class Should be belong to FY SE TE BE" })
    class: string;

    @IsNumber()
    Id: number;

    @IsEmail()
    EmailId: string;
}
