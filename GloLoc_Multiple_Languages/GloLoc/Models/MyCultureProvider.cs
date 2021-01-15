using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;

namespace GloLoc.Models
{
    /*public class MyCultureProvider : RequestCultureProvider
    {
        public override Task<ProviderCultureResult> DetermineProviderCultureResult(HttpContext httpContext)
        {
            var current_User = await user_Manager.GetUserAsync(HttpContext.User);
            string user_culture = TblUserName.Where(c => c.Id == current_User.Id).Select(c => c.Culture).FirstOrDefault();

            var requestCulture = new ProviderCultureResult(user_culture);

            return Task.FromResult(requestCulture);
        }
    }*/
}
