// NOTE: please use this controller to do the dummmy endpoints 
namespace Hygieia.Eye.API.Controllers
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
        private static int crowd = 0;

        public DashboardController(ILogger<DashboardController> logger)
        {
            _logger = logger;
        }

        [HttpGet("GetCrowd")]
        public int GetCrowd()
        {
            crowd = crowd + 1;
            return crowd;
        }
    }
}
