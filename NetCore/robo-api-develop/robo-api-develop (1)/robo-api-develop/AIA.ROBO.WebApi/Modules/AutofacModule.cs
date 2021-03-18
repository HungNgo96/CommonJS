using AIA.ROBO.Core.Configs;
using AIA.ROBO.Core.Contracts.Data;
using AIA.ROBO.Core.Contracts.Service;
using AIA.ROBO.Service;
using Autofac;
using Microsoft.Extensions.Configuration;
using System;
using AIA.ROBO.Data;

namespace AIA.ROBO.WebApi.Modules
{
    public class AutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            RegisterRepositories(builder);
            RegisterServices(builder);
        }

        private void RegisterServices(ContainerBuilder builder)
        {
            builder.Register(c => new SampleService(c.Resolve<IServiceProvider>())).As<ISampleService>().InstancePerLifetimeScope();
        }

        private void RegisterRepositories(ContainerBuilder builder)
        {
            var dbConection = AppSettings.Configs.GetConnectionString("AppDb");
            builder.Register(c => new AppDbContext(dbConection)).As<IDbContext>().InstancePerLifetimeScope();
            builder.Register(c => new SampleRepository(c.Resolve<IServiceProvider>())).As<ISampleRepository>().InstancePerLifetimeScope();
        }
    }
}
