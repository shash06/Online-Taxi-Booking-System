namespace WebApiService.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangedDefaultColumnNames : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.User", "Gender", c => c.String());
            AddColumn("dbo.User", "Address", c => c.String());
            AddColumn("dbo.User", "DOB", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.User", "DOB");
            DropColumn("dbo.User", "Address");
            DropColumn("dbo.User", "Gender");
        }
    }
}
