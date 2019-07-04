using EmployeeManagerBackend.Data;
using EmployeeManagerBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeManagerBackend.Controllers
{
    public class EmployeeListController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Employees
        public IQueryable<Employee> GetEmployees()
        {
            return db.Employees;
        }

    }
}
