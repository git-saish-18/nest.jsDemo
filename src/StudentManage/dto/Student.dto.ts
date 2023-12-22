import { Type } from 'class-transformer';
import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';
import { number } from 'zod';

export class StudentSchema {
    @IsString()
    @Length(3, 10, { message: "string length is in between 3 to 10 character" })
    @IsNotEmpty({ message: "String should not empty" })
    Name: string;

    @IsEnum(['FY', 'SE', 'TE', "BE"], { message: "Class Should be belong to FY SE TE BE" })
    Class: string;

    @IsInt()
    @IsNotEmpty()
    // @Type(() => number)
    Id: number;

    // @IsNotEmpty()
    // @IsString()
    // @Length(10, 10, { message: "Phone number is should be 10 digit" })
    // PhoneNumber: string;

    @IsEmail()
    EmailId: string;


    @IsString()
    @Length(3, 10, { message: "string length is in between 3 to 10 character" })
    // @IsNotEmpty({ message: "String should not empty" })
    Password: string;
}
