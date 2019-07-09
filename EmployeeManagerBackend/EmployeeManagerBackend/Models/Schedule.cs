using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace EmployeeManagerBackend.Models
{
    public class Schedule
    {
        [Key]
        public int Id { get; set; }


        [ForeignKey("Employee")]
        public int EmployeeId { get; set; }
        [Required]
        public DateTime ClockDate { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }

        public virtual Employee Employee { get; set; }
    }
}