using AIA.ROBO.Core;
using AIA.ROBO.Core.Exceptions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Http;
using System.Net;
using System.Text.Json;

namespace AIA.ROBO.WebApi.Extensions
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureExceptionHandler(this IApplicationBuilder app)
        {
            app.UseExceptionHandler(options =>
            {
                options.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = MimeType.APPLICATION_JSON;

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    var ex = contextFeature?.Error;
                    if (ex != null)
                    {
                        var statusCode = (int)HttpStatusCode.InternalServerError;
                        var errorDetail = new ErrorDetail
                        {
                            ErrorCode = CommonErrorCode.ERROR,
                            ErrorMessage = ex.Message
                        };

                        var baseException = ex.GetBaseException();
                        if (baseException != null && baseException is ErrorException)
                        {
                            var errorException = baseException as ErrorException;
                            statusCode = errorException.StatusCode;
                            errorDetail = errorException.ErrorDetail;

                            switch (errorDetail.ErrorCode)
                            {
                                case CommonErrorCode.ACCESS_DENIED:
                                    context.Response.StatusCode = (int)HttpStatusCode.Forbidden;
                                    break;
                                case CommonErrorCode.UNAUTHORIZED:
                                case CommonErrorCode.INVALID_JWT_TOKEN:
                                    context.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                                    break;
                                case CommonErrorCode.BAD_REQUEST:
                                case CommonErrorCode.ENTITY_NOT_FOUND:
                                    context.Response.StatusCode = (int)HttpStatusCode.BadRequest;
                                    break;
                            }
                        }

                        context.Response.StatusCode = statusCode;
                        await context.Response.WriteAsync(JsonSerializer.Serialize(errorDetail));
                    }
                });
            });
        }
    }
}
