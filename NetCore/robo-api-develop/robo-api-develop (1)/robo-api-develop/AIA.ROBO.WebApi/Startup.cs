using System;
using AIA.ROBO.Core.Configs;
using AIA.ROBO.WebApi.Extensions;
using AIA.ROBO.WebApi.Modules;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AIA.ROBO.WebApi
{
    public class Startup
    {
        public IContainer ApplicationContainer { get; private set; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();

            services.Configure<ApiBehaviorOptions>(options =>
            {
                options.SuppressModelStateInvalidFilter = true;
            });

            services.AddMemoryCache();
            services.AddHttpContextAccessor();
            services.AddSwaggerDocumentation("ROBO API", typeof(Program).Assembly);

            services.AddAuthorization(options =>
            {
            });

            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule<AutofacModule>();
            ApplicationContainer = builder.Build();

            return new AutofacServiceProvider(ApplicationContainer);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            var corsSettings = AppSettings.Configs.GetSection("CorsSettings").Get<CorsSettings>();
            app.UseCorsCommon(corsSettings);

            app.UseSwaggerDocumentation("ROBO API", typeof(Program).Assembly);
            app.ConfigureExceptionHandler();

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
