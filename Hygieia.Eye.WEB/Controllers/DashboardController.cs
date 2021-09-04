// NOTE: please use this controller to do the dummmy endpoints 
namespace Hygieia.Eye.WEB.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;

    [ApiController]
    [Route("[controller]")]
    public class DashboardController : ControllerBase
    {

        private readonly ILogger<DashboardController> _logger;

        public DashboardController(ILogger<DashboardController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<PersonEntry> Get()
        {
            _logger.Log(LogLevel.Information, $"Get all entries");
            return new List<PersonEntry> 
            {
                new PersonEntry{ BodyTemperature = 60.44M, EntryTime = DateTime.UtcNow.AddHours(24), Summary = "No Violations"},
                new PersonEntry{ BodyTemperature = 60.44M, EntryTime = DateTime.UtcNow.AddHours(23), Summary = "No Violations"},
                new PersonEntry{ BodyTemperature = 60.44M, EntryTime = DateTime.UtcNow.AddHours(22), Summary = "No Violations"},
                new PersonEntry{ BodyTemperature = 60.44M, EntryTime = DateTime.UtcNow.AddHours(21), Summary = "No Violations"},
            };
        }
    }
}
