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
        public string phone { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string address { get; set; }
        /// <summary>
        /// 
        /// </summary>
        public string email { get; set; }
    }
}
