//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApiService.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Comment
    {
        public int Comment_ID { get; set; }
        public Nullable<int> Customer_ID { get; set; }
        public Nullable<int> Employee_ID { get; set; }
        public string Feedback { get; set; }
        public string Comment1 { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
