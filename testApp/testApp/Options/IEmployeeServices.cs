using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testApp.Model;

namespace testApp.Options
{
    public interface IEmployeeServices
    {
         Employer CreateEmployee(Employer employer);
         Employer GetEmployee(int id);

         List<Employer> GetAllEmployee();
        void DeleteEmployee(int id);
        void EditEmployee(Employer employer);
    }
}
