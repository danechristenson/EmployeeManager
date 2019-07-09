namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial3 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Schedules", "EmployeeId", "dbo.Employees");
            DropIndex("dbo.Schedules", new[] { "EmployeeId" });
        }
        
        public override void Down()
        {
            CreateIndex("dbo.Schedules", "EmployeeId");
            AddForeignKey("dbo.Schedules", "EmployeeId", "dbo.Employees", "Id", cascadeDelete: true);
        }
    }
}
