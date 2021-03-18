using System.Text.Json.Serialization;

namespace AIA.ROBO.Core.Exceptions
{
    public class ErrorDetail
    {
        [JsonPropertyName("errorCode")]
        public string ErrorCode { get; set; }

        [JsonPropertyName("errorMessage")]
        public object ErrorMessage { get; set; }
    }
}