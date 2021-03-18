using Microsoft.AspNetCore.Mvc;

namespace AIA.ROBO.WebApi.Controllers
{
    [ApiController]
    public class VersionController : ControllerBase
    {
        public VersionController()
        {
        }

        [HttpGet("/version")]
        public ActionResult<string> GetVersion()
        {
            return typeof(Program).Assembly.GetName().Version.ToString();
        }
    }
}