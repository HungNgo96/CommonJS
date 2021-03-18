using System.Net;

namespace AIA.ROBO.Core.Exceptions
{
    public class AccessDeniedException : ErrorException
    {
        public AccessDeniedException(string message) : base((int)HttpStatusCode.Forbidden, CommonErrorCode.ACCESS_DENIED, message)
        {
        }
    }
}