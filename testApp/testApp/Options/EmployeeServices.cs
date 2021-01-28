using System.Collections.Generic;
using System.Linq;
using testApp.Data;
using testApp.Model;

namespace testApp.Options
{
    public class EmployeeServices : IEmployeeServices
    {
        private AppDbContext _context;

        //dependency injection
         public EmployeeServices(AppDbContext context)
        {
            _context = context;
        }

        public Employee CreateEmployee(Employee employee)
        {
            _context.Add(employee);
            _context.SaveChanges();

            return employee;
        }
        public Employee GetEmployee(int id)
        {
            return _context.Employee.First(x => x.id == id);
        }
        public List<Employee> GetAllEmployee()
        {
            return _context.Employee.ToList();
        }
        public void DeleteEmployee(int id)
        {
            var employee = _context.Employee.First(x => x.id == id);
            _context.Employee.Remove(employee);
            _context.SaveChanges();
        }
        public void EditEmployee(Employee employer)
        {
            var editEmployer=_context.Employee.First(x => x.id == employer.id);
            editEmployer.firstName = employer.firstName;
            editEmployer.lastName = employer.lastName;
            editEmployer.phone = employer.phone;
            editEmployer.email = employer.email;
            editEmployer.address = employer.address;
            _context.SaveChanges();
        }
    }
}
