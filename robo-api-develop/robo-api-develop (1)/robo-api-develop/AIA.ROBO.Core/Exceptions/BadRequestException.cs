using System.Collections.Generic;
using System.Net;

namespace AIA.ROBO.Core.Exceptions
{
    public class BadRequestException : ErrorException
    {
        public BadRequestException(string errorCode, string message = null) : base((int)HttpStatusCode.BadRequest, errorCode, message)
        {
        }

        public BadRequestException(ICollection<KeyValuePair<string, ICollection<string>>> errors) : base((int)HttpStatusCode.BadRequest, new ErrorDetail
        {
            ErrorCode = CommonErrorCode.BAD_REQUEST,
            ErrorMessage = errors
        })
        {
        }
    }
}