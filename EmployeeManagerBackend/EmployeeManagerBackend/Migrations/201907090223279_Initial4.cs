namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial4 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Schedules", "ClockDay", c => c.DateTime(nullable: false));
            CreateIndex("dbo.Schedules", "EmployeeId");
            AddForeignKey("dbo.Schedules", "EmployeeId", "dbo.Employees", "Id", cascadeDelete: true);
            DropColumn("dbo.Schedules", "Day");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Schedules", "Day", c => c.DateTime(nullable: false));
            DropForeignKey("dbo.Schedules", "EmployeeId", "dbo.Employees");
            DropIndex("dbo.Schedules", new[] { "EmployeeId" });
            DropColumn("dbo.Schedules", "ClockDay");
        }
    }
}
