import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword, Length } from "class-validator"
import { genderEnum } from "@prisma/client"
import { approvedEnum } from "@prisma/client"
export class EmployeeDto {

    @IsNumber()
    employeeId: number
    @IsString()
    @IsNotEmpty()
    @Length(3, 10, { message: "First Name should be in between 3 to 10" })
    fullName: string
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsStrongPassword()
    @IsNotEmpty()
    password: string

    @IsString()
    dateOfBirth: string
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: "mobile number should be 10 character" })
    mobileNumber: string
    @IsString()
    joiningDate: string
    @IsString()
    @IsEnum(['MALE',
        'FEMALE',
        'OTHER'], { message: "This filed should be Male, Femal, T" })
    @IsNotEmpty()
    gender: genderEnum
    @IsEnum(['APPROVED'
        , 'PENDING'
        , 'REJECTED'], { message: "This filed should be Yes or No " })
    approved: approvedEnum

    @IsString()
    token: string

}

