import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsString, IsStrongPassword, Length } from "class-validator"

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
    dateOfBirth: Date
    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10, { message: "mobile number should be 10 character" })
    mobileNumber: string
    @IsString()
    joiningDate: Date
    @IsString()
    @IsEnum(['Male', 'Femal', "T"], { message: "This filed should be Male, Femal, T" })
    @IsNotEmpty()
    gender: string
    @IsEnum(['Yes', 'No'], { message: "This filed should be Yes or No " })
    approved: string
}