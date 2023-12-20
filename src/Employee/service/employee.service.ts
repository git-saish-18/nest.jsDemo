import { Injectable } from "@nestjs/common";
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
            return "No record found"
        } else {
            this.EmployeeData[empIdx] = requestBody;
            return `Emp ${id} update successfully `;
        }
    };
    deleteEmp(id: number) {
        this.EmployeeData = this.EmployeeData.filter((emp) => emp.id !== id);
        return `Emp ${id} deleted successfully  `;
    };
}