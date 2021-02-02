using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using WebApiService.Models;

namespace WebApiService
{
    public class ApplicationOAuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var user = await manager.FindAsync(context.UserName, context.Password);
            if (user != null)
            {
                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim("Email", user.Email));
                identity.AddClaim(new Claim("Username", user.Email));
                
                
                identity.AddClaim(new Claim("PhoneNumber", user.PhoneNumber));
                
                identity.AddClaim(new Claim("Gender", user.Gender));
                identity.AddClaim(new Claim("Address", user.Address));
                identity.AddClaim(new Claim("DOB", user.DOB.ToString()));
                identity.AddClaim(new Claim("Name", user.Name));
                identity.AddClaim(new Claim("LoggedOn", DateTime.Now.ToString()));
                var userRoles = manager.GetRoles(user.Id);
                foreach (string roleName in userRoles)
                {
                    identity.AddClaim(new Claim(ClaimTypes.Role, roleName));
                }
                var additionalData = new AuthenticationProperties(new Dictionary<string, string>{
                    {
                        "role", Newtonsoft.Json.JsonConvert.SerializeObject(userRoles)
                    }
                });
                var token = new AuthenticationTicket(identity, additionalData);
                context.Validated(token);
            }
            else
                return;
        }

        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }
    }
    }
