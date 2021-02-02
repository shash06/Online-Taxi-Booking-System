using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Web.Http;
using WebApiService.Models;

namespace WebApiService.Controllers
{
    public class AccountController : ApiController
    {
        private Bootcamp2Entities db = new Bootcamp2Entities();

        [Route("api/User/Register")]
        [HttpPost]
        [AllowAnonymous]
        public IdentityResult Register(AccountModel model)
        {
            var userStore = new UserStore<ApplicationUser>(new ApplicationDbContext());
            var manager = new UserManager<ApplicationUser>(userStore);
            var user = new ApplicationUser() { UserName = model.Email, Email = model.Email };
            user.Name = model.Name;
            user.Gender = model.Gender;
            user.DOB = model.DOB;
            user.Address = model.Address;
            user.PhoneNumber = model.PhoneNumber.ToString();
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 3
            };
            IdentityResult result = manager.Create(user, model.Password);
            manager.AddToRoles(user.Id, model.Roles);
            var customer = new Customer();
            var employee = new Employee();
            string abcd = ConvertStringArrayToString(model.Roles);
            if(abcd=="Customer")
            {
                customer.Customer_Name = model.Name;
                customer.Gender = model.Gender;
                customer.DOB = model.DOB;
                customer.Address = model.Address;
                customer.Phone_No = model.PhoneNumber.ToString();
                customer.Email_ID = model.Email;
                customer.Password = model.Password;
                db.Customers.Add(customer);
                db.SaveChanges();
            }
            if (abcd == "Employee")
            {
                employee.Employee_Name = model.Name;
                employee.Gender = model.Gender;
                employee.DOB = model.DOB;
                employee.Address = model.Address;
                employee.Phone_No = model.PhoneNumber.ToString();
                employee.Email_ID = model.Email;
                employee.Password = model.Password;
                db.Employees.Add(employee);
                db.SaveChanges();
            }
            return result;
        }

        static string ConvertStringArrayToString(string[] array)
        {
            // Concatenate all the elements into a StringBuilder.
            StringBuilder builder = new StringBuilder();
            foreach (string value in array)
            {
                builder.Append(value);
                //builder.Append('.');
            }
            return builder.ToString();
        }


        [HttpGet]
        [Route("api/GetUserClaims")]
        public AccountModel GetUserClaims()
        {
            var identityClaims = (ClaimsIdentity)User.Identity;
            IEnumerable<Claim> claims = identityClaims.Claims;
            AccountModel model = new AccountModel()
            {
                UserName = identityClaims.FindFirst("Username").Value,
                Email = identityClaims.FindFirst("Email").Value,
                PhoneNumber = Convert.ToInt64(identityClaims.FindFirst("PhoneNumber").Value),
                Gender = identityClaims.FindFirst("Gender").Value,
                Address = identityClaims.FindFirst("Address").Value,
                DOB = Convert.ToDateTime(identityClaims.FindFirst("DOB").Value),
                Name = identityClaims.FindFirst("Name").Value,
                LoggedOn = identityClaims.FindFirst("LoggedOn").Value
            };
            return model;
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        [Route("api/ForAdminRole")]
        public string ForAdminRole()
        {
            return "for admin role";
        }

        [HttpGet]
        [Authorize(Roles = "Customer")]
        [Route("api/ForCustomerRole")]
        public string ForCustomerRole()
        {
            return "For customer role";
        }

        [HttpGet]
        [Authorize(Roles = "Employee")]
        [Route("api/ForEmployee")]
        public string ForEmployeeRole()
        {
            return "For Employee role";
        }
    }
}
