﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class Bootcamp2Entities : DbContext
    {
        public Bootcamp2Entities()
            : base("name=Bootcamp2Entities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Taxi> Taxis { get; set; }
        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserClaim> UserClaims { get; set; }
        public virtual DbSet<UserLogin> UserLogins { get; set; }
        public virtual DbSet<EmployeeRoster> EmployeeRosters { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Booking> Bookings { get; set; }
        public virtual DbSet<DistanceMaster> DistanceMasters { get; set; }
        public virtual DbSet<VehicleType> VehicleTypes { get; set; }
    }
}