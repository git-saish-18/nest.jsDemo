import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException, ParseIntPipe } from "@nestjs/common";
import { EmployeeDTO } from '../dto/Employee.dto'


//  dependency Injectable in IOC  container 
@Injectable()
export class EmployeeService {
    private EmployeeData = [];
    getUser() {
        return this.EmployeeData;
    };
    addEmp(requestBody: EmployeeDTO) {
        let employeedata = requestBody;
        this.EmployeeData.push(employeedata);
        return `Employee Add sucessfully `;
    };
    updateEmp(id: number, requestBody: EmployeeDTO) {
        let employee = this.EmployeeData.find(emp => emp.id === +id);
        console.log(employee)
        let empIdx = this.EmployeeData.indexOf(employee);
        console.log(empIdx)
        if (empIdx < 0) {
            // (msg , statuscode)
            // throw new NotFoundException()
            // throw new HttpException("Not found ", 404)
            // throw new HttpException("Not found", HttpStatus.NOT_FOUND)
            throw new BadRequestException()
        } else {
            this.EmployeeData[empIdx] = requestBody;
            return `Emp ${id} update successfully `;
        }
    };
    deleteEmp(id: number) {
        let len = this.EmployeeData.length;
        this.EmployeeData = this.EmployeeData.filter((emp) => emp.id !== id);
        if (len === this.EmployeeData.length) {
            throw new HttpException("User is not found", HttpStatus.NOT_FOUND)
        } else {

            return `Emp ${id} deleted successfully  `;
        }
    };
}