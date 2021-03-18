using AIA.ROBO.Core.Configs;
using Microsoft.AspNetCore.Builder;
using System;

namespace AIA.ROBO.WebApi.Extensions
{
    public static class CorsExtensions
    {
        public static IApplicationBuilder UseCorsCommon(this IApplicationBuilder app, CorsSettings corsSettings)
        {
            if (!string.IsNullOrEmpty(corsSettings.AllowOrigin))
            {
                app.UseCors(m =>
                {
                    if (corsSettings.AllowOrigin == "*")
                    {
                        m.AllowAnyOrigin();
                    }
                    else
                    {
                        m.WithHeaders(corsSettings.AllowOrigin.Split(",", StringSplitOptions.RemoveEmptyEntries));
                    }

                    if (corsSettings.AllowMethod == "*")
                    {
                        m.AllowAnyMethod();
                    }
                    else
                    {
                        m.WithHeaders(corsSettings.AllowMethod.Split(",", StringSplitOptions.RemoveEmptyEntries));
                    }

                    if (corsSettings.AllowHeader == "*")
                    {
                        m.AllowAnyHeader();
                    }
                    else
                    {
                        m.WithHeaders(corsSettings.AllowHeader.Split(",", StringSplitOptions.RemoveEmptyEntries));
                    }
                });
            }
            return app;
        }
    }
}
