using AIA.ROBO.Core.Contracts.Data;
using AIA.ROBO.Core.Contracts.Service;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace AIA.ROBO.Service
{
    public class SampleService : ISampleService
    {
        private readonly ISampleRepository sampleRepository;

        public SampleService(IServiceProvider serviceProvider)
        {
            sampleRepository = serviceProvider.GetRequiredService<ISampleRepository>();
        }

        public DateTime GetDatabaseDateTime()
        {
            return sampleRepository.GetDatabaseDateTime();
        }
    }
}
