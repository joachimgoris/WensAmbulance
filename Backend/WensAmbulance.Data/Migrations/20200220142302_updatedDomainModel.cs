using Microsoft.EntityFrameworkCore.Migrations;

namespace WensAmbulance.Data.Migrations
{
    public partial class updatedDomainModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "patients");

            migrationBuilder.AddColumn<string>(
                name: "FirstName",
                table: "patients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "patients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstName",
                table: "patients");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "patients");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "patients",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
