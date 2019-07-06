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
        
        [Key]
        public int ManagerId { get; set; }
        [Required]
        public List<Employee> Subordinates { get; set; }

    }
}