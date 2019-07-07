using EmployeeManagerBackend.Models;
using System.Data.Entity;

namespace EmployeeManagerBackend.Data
{
    public class ApplicationDbContext : System.Data.Entity.DbContext
    {
        public ApplicationDbContext() :
            base("employeeDBConnection")
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Schedule> Schedules { get; set; }

        //public DbSet<DepartmentStructure> DepartmentStructures { get; set; }
    }
}