namespace EmployeeManagerBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        firstName = c.String(nullable: false),
                        lastName = c.String(nullable: false),
                        address = c.String(nullable: false),
                        city = c.String(nullable: false),
                        postal = c.String(nullable: false),
                        phone = c.Int(nullable: false),
                        createdDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Schedules",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false),
                        startTime = c.DateTime(nullable: false),
                        endTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Schedules");
            DropTable("dbo.Employees");
        }
    }
}
