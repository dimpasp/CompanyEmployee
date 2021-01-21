using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testApp.Model;

namespace testApp.Options
{
    public interface IEmployeeServices
    {
        Employee CreateEmployee(Employee employer);
        Employee GetEmployee(int id);

         List<Employee> GetAllEmployee();
        void DeleteEmployee(int id);
        void EditEmployee(Employee employer);
    }
}
