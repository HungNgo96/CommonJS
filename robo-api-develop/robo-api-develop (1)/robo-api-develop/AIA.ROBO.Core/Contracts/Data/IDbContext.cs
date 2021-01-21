using System.Data.Common;

namespace AIA.ROBO.Core.Contracts.Data
{
    public interface IDbContext
    {
        DbConnection GetDbConnection();
    }
}
