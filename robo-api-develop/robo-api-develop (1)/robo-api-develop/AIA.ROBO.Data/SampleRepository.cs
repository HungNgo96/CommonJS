using AIA.ROBO.Core.Contracts.Data;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace AIA.ROBO.Data
{
    public class SampleRepository : ISampleRepository
    {
        private readonly IDbContext dbContext;

        public SampleRepository(IServiceProvider serviceProvider)
        {
            dbContext = serviceProvider.GetRequiredService<IDbContext>();
        }

        public DateTime GetDatabaseDateTime()
        {
            using var connection = dbContext.GetDbConnection();
            var cmd = connection.CreateCommand();
            cmd.CommandText = "SELECT GETDATE()";

            connection.Open();
            var now = (DateTime)cmd.ExecuteScalar();
            connection.Close();

            return now;
        }
    }
}
