namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class on : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Employees", "StartTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.Employees", "EndTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.Employees", "Manager_Id", c => c.Int());
            AlterColumn("dbo.Employees", "Phone", c => c.String(nullable: false));
            CreateIndex("dbo.Employees", "Manager_Id");
            AddForeignKey("dbo.Employees", "Manager_Id", "dbo.Employees", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Employees", "Manager_Id", "dbo.Employees");
            DropIndex("dbo.Employees", new[] { "Manager_Id" });
            AlterColumn("dbo.Employees", "Phone", c => c.Int(nullable: false));
            DropColumn("dbo.Employees", "Manager_Id");
            DropColumn("dbo.Employees", "EndTime");
            DropColumn("dbo.Employees", "StartTime");
        }
    }
}
