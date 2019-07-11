namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Schedules");
            AlterColumn("dbo.Schedules", "Id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Schedules", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Schedules");
            AlterColumn("dbo.Schedules", "Id", c => c.Int(nullable: false));
            AddPrimaryKey("dbo.Schedules", new[] { "Id", "EmployeeId" });
        }
    }
}
