using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiService.Models
{
    public class AccountModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }

        
        public string Password { get; set; }

        public string Gender { get; set; }

        //[Column(TypeName ="datetime2")]
        public DateTime DOB { get; set; }
        public string Address { get; set; }
        public long PhoneNumber { get; set; }
        public string Name { get; set; }

        public string LoggedOn { get; set; }
        public string[] Roles { get; set; }
    }
}