﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using testApp.Options;
using testApp.Model;

namespace testApp.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {

        private readonly ILogger _logger;
        private IEmployeeServices _employeeServices;
        public EmployeeController(ILogger<EmployeeController> logger, IEmployeeServices employeeServices)
        {
            _logger = logger;
            _employeeServices = employeeServices;
        }


        [HttpPost]
        public IActionResult CreateEmployee(Employee employee)
        {
            var newEmployee = _employeeServices.CreateEmployee(employee);
            return Ok(newEmployee);
        }


        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            return Ok(_employeeServices.GetEmployee(id));
        }

        [HttpGet]
        public IActionResult GetAllEmployee()
        {
            return Ok(_employeeServices.GetAllEmployee());
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            _employeeServices.DeleteEmployee(id);
            return Ok();

        }


        [HttpPut("{id}")]
        public IActionResult EditEmployee([FromBody] Employee employee)
        {
            _employeeServices.EditEmployee(employee);
            return Ok();

        }
    }
}
