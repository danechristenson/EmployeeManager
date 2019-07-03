using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EmployeeManagerBackend.Models
{
    public class DepartmentStructure
    {
        

        public Employee employee { get; set; }

        public List<Employee> subordinates { get; set; }

    }
}