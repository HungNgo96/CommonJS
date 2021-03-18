using AIA.ROBO.Core.Contracts.Data;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace AIA.ROBO.Data
{
    public class AppDbContext : DbContext, IDbContext
    {
        private readonly string connectionString;
        public AppDbContext(string connectionString)
        {
            this.connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString)
                .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }

        public DbConnection GetDbConnection()
        {
            return Database.GetDbConnection();
        }
    }
}