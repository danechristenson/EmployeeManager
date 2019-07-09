namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial5 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Schedules", "ClockDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.Schedules", "ClockDay");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Schedules", "ClockDay", c => c.DateTime(nullable: false));
            DropColumn("dbo.Schedules", "ClockDate");
        }
    }
}
