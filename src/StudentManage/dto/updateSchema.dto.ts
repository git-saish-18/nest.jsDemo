import { PartialType } from "@nestjs/mapped-types"
import { StudentSchema } from "./Student.dto"
export class UpdateStudentSchema extends PartialType(StudentSchema) { }