using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiOne
{
    public class Startup
    {

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddAuthentication("Bearer")
             .AddJwtBearer("Bearer", config =>
             {
                 config.Authority = "https://localhost:44305/";

                 config.Audience = "ApiOne";

                 config.RequireHttpsMetadata = false;

                 //config.SaveToken = true;
                 //string issuer = "Tokens:Issuer";
                 //string signingKey ="Tokens:Key";

                 //var secretBytes = Encoding.UTF8.GetBytes(signingKey);
                 //var key = new SymmetricSecurityKey(secretBytes);
                 //config.TokenValidationParameters = new TokenValidationParameters()
                 //{

                 //    ValidateIssuer = true,
                 //    ValidateAudience = true,
                 //    ValidateIssuerSigningKey = true,
                 //    ValidateLifetime = true,



                 //    ValidIssuer = issuer,
                 //    ValidAudience = "ApiOne",
                 //    IssuerSigningKey = key,
                 //    ClockSkew = TimeSpan.Zero,

                 //    //ClockSkew = TimeSpan.Zero,
                 //    //ValidateIssuer = true,
                 //    //ValidateAudience = true,
                 //    //ValidateIssuerSigningKey = true,
                 //    //ValidAudience = audiance,
                 //    //ValidIssuer = issuer,
                 //    //IssuerSigningKey = key,
                 //    //ValidateLifetime = true,

                 //};



             });

            services.AddCors(config => config.AddPolicy("AllowAll",
                p =>

                    p.AllowAnyOrigin()
                        .AllowAnyHeader()
                        .AllowAnyMethod()



                ));

            services.AddControllers();
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAll");

            app.UseRouting();



            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapDefaultControllerRoute();
            });
        }
    }
}
