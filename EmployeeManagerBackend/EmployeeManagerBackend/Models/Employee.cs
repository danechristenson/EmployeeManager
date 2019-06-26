using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeManagerBackend.Models
{
    public class Employee
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public char gender { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string postal { get; set; }
        public int phone { get; set; }
        public DateTime createdDate { get; set; }
    }
}