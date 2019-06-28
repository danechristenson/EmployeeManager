using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmployeeManagerBackend.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string firstName { get; set; }
        [Required]
        public string lastName { get; set; }
        [Required]
        public char gender { get; set; }
        [Required]
        public string address { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string postal { get; set; }
        [Required]
        public int phone { get; set; }
        [Required]
        public DateTime createdDate { get; set; }
    }
}