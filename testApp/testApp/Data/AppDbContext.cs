using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using testApp.Model;

namespace testApp.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Employer> Employer { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Data Source=localhost;Initial Catalog=EmployeeDB;Trusted_Connection=True;MultipleActiveResultSets=True");
        }
    }
}
