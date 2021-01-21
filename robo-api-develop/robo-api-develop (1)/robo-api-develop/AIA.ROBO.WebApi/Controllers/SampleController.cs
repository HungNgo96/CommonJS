using AIA.ROBO.Core.Configs;
using AIA.ROBO.Core.Contracts.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;

namespace AIA.ROBO.WebApi.Controllers
{
    [ApiController]
    [Route("api/sample")]
    public class SampleController : ControllerBase
    {
        private readonly ILogger logger;
        private readonly ISampleService sampleService;

        public SampleController(IServiceProvider serviceProvider)
        {
            logger = serviceProvider.GetRequiredService<ILogger<SampleController>>();
            sampleService = serviceProvider.GetRequiredService<ISampleService>();
        }

        [HttpGet("configs")]
        public IActionResult GetConfigs()
        {
            logger.LogInformation("GetConfigs");
            var dbTime = sampleService.GetDatabaseDateTime();
            return Ok(new
            {
                DatabaseDateTime = dbTime,
                AppSettings = AppSettings.Instance
            });
        }
    }
}