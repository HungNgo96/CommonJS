using System.Net;

namespace AIA.ROBO.Core.Exceptions
{
    public class UnauthorizedException : ErrorException
    {
        public UnauthorizedException(string errorCode, string message = null) : base((int)HttpStatusCode.Unauthorized, errorCode, message)
        {
        }
    }
}