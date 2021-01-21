using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace testApp.Model
{
    public class Employee
    {
        /// <summary>
        /// 
        /// </summary>
        [Key]
        public int id { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string firstName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string lastName { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Phone { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Address { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string Email { get; set; }
    }
}
