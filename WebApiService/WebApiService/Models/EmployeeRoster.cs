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
    
    public partial class EmployeeRoster
    {
        public int Roster_ID { get; set; }
        public Nullable<int> Employee_ID { get; set; }
        public Nullable<System.DateTime> From_Date { get; set; }
        public Nullable<System.DateTime> To_Date { get; set; }
        public Nullable<System.TimeSpan> In_Time { get; set; }
        public Nullable<System.TimeSpan> Out_Time { get; set; }
    
        public virtual Employee Employee { get; set; }
    }
}