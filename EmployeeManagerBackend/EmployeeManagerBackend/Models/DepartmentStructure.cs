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
        [Column(Order = 0), Key, ForeignKey("employee")]
        public int employeeId { get; set; }
        [Column(Order = 1), Key, ForeignKey("subordinates")]
        public int subordinateId { get; set; }
        
        public Employee employee { get; set; }
       
        public List<Employee> subordinates { get; set; }

    }
}