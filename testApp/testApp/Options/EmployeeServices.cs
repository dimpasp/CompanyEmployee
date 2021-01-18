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

        public Employer CreateEmployee(Employer employer)
        {
            _context.Add(employer);
            _context.SaveChanges();

            return employer;
        }
        public Employer GetEmployee(int id)
        {
            return _context.Employer.First(x => x.id == id);
        }
        public List<Employer> GetAllEmployee()
        {
            return _context.Employer.ToList();
        }
        public void DeleteEmployee(int id)
        {
            var employee = _context.Employer.First(x => x.id == id);
            _context.Employer.Remove(employee);
            _context.SaveChanges();
        }
        public void EditEmployee(Employer employer)
        {
            var editEmployer=_context.Employer.First(x => x.id == employer.id);
            editEmployer.firstName = employer.firstName;
            editEmployer.lastName = employer.lastName;
            editEmployer.Phone = employer.Phone;
            editEmployer.Email = employer.Email;
            editEmployer.Address = employer.Address;
            _context.SaveChanges();
        }
    }
}
