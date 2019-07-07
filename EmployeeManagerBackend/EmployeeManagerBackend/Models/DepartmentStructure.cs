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
        [Key, Column(Order = 0)]
        public Employee Manager { get; set; }
        [Key, Column(Order = 1)]
        public List<Employee> Subordinates { get; set; }
        
    }
}