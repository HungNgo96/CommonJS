using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AIA.ROBO.Core.Configs;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Serilog;

namespace AIA.ROBO.WebApi
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                var config = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json", false, false)
                    .Build();
                var urls = config.GetSection("Urls").Get<string[]>();

                WebHost.CreateDefaultBuilder(args)
                    .ConfigureAppConfiguration((context, cnf) =>
                    {
                        var root = cnf.Build();
                        cnf.AddAzureKeyVault(
                            $"https://{root["KeyVault:Vault"]}.vault.azure.net/",
                            root["KeyVault:ClientId"],
                            root["KeyVault:ClientSecret"]);
                        AppSettings.Configs = cnf.Build();
                        AppSettings.Instance = AppSettings.Configs.GetSection("AppSettings").Get<AppSettings>();
                    })
                    .ConfigureLogging((ctx, builder) =>
                    {
                        var path = AppSettings.Configs["Logging:LogFilePath"];
                        Log.Logger = new LoggerConfiguration()
                            .WriteTo.Console()
                            .WriteTo.File(path,
                                rollingInterval: RollingInterval.Day,
                                retainedFileCountLimit: null,
                                rollOnFileSizeLimit: true,
                                fileSizeLimitBytes: 20971520L)
                            .CreateLogger();
                    })
                    .UseSerilog()
#if !DEBUG
                    .UseUrls(urls)
#endif
                    .UseStartup<Startup>()
                    .Build()
                    .Run();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"ERROR START WEBAPI: {ex}");
                throw ex;
            }
        }
    }
}
