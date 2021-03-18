namespace AIA.ROBO.Core.Exceptions
{
    public class EntityNotFoundException : ErrorException
    {
        public EntityNotFoundException(string entityName, string entityId) : base(404,
            new ErrorDetail
            {
                ErrorCode = CommonErrorCode.ENTITY_NOT_FOUND,
                ErrorMessage = new
                {
                    EntityName = entityName,
                    EntityId = entityId
                }
            })
        {
        }
    }
}