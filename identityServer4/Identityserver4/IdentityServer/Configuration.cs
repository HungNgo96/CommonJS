using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IdentityServer
{
    public static class Configuration
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {

                new IdentityResources.OpenId(),
                //new IdentityResources.Email(),
                new IdentityResources.Profile(),
                new IdentityResource
                {
                    Name="rc.scope",
                    UserClaims =
                    {
                        "rc.garndma"
                    }

                }

            };

        public static IEnumerable<ApiResource> GetApis() =>
            new List<ApiResource>
            {
                new ApiResource("ApiOne"),
                new ApiResource("ApiTwo"),
            };

        //public static IEnumerable<ApiScope> GetApiScopes()
        //{
        //    return new List<ApiScope>
        //    {
        //        // backward compat
        //        new ApiScope("ApiOne"),
        //        new ApiScope("ApiTwo")
        //    };
        //}

        public static IEnumerable<Client> GetClients() =>
            new List<Client>
            {
                new Client
                {
                    ClientId = "client_id",
                    ClientSecrets = {new Secret("client_secret".ToSha256())},
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    AllowedScopes = {"ApiOne"},
                },
                new Client
                {
                    ClientId = "client_id_mvc",
                    ClientSecrets = {new Secret("client_secret_mvc".ToSha256())},
                    AllowedGrantTypes = GrantTypes.Code,

                    RedirectUris = {"https://localhost:44322/signin-oidc"},
                       PostLogoutRedirectUris = { "https://localhost:44322/Home/Index" },

                    AllowedScopes = {
                        "ApiOne",
                        "ApiTwo",
                        IdentityServerConstants.StandardScopes.OpenId,
                        //IdentityServer4.IdentityServerConstants.StandardScopes.Email,
                        IdentityServerConstants.StandardScopes.Profile,
                        "rc.scope",
                    },

                    RequireConsent = false,
                    AllowOfflineAccess = true,//set for refresh token
                    //puts all the claims in the id token
                    //AlwaysIncludeUserClaimsInIdToken = true,
                },

                  new Client {
                    ClientId = "client_id_js_url",

                    AllowedGrantTypes = GrantTypes.Implicit,

                    RedirectUris = { "https://localhost:44345/home/signin" },
                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        "ApiOne",
                    },

                    RequireConsent = false,
                    AllowAccessTokensViaBrowser = true,
                },
                     new Client {
                    ClientId = "client_id_js",

                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris = { "https://localhost:44345/home/signin" },
                    PostLogoutRedirectUris = { "https://localhost:44345/Home/Index" },
                    AllowedCorsOrigins = { "https://localhost:44345" },

                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        "ApiOne",
                        "ApiTwo",
                        "rc.scope",
                    },

                    //AccessTokenLifetime = 1,

                    AllowAccessTokensViaBrowser = true,
                    RequireConsent = false,
                },
            };
    }
}
