using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WensAmbulance.Domain;

namespace WensAmbulance.Data
{
    public class WensAmbulanceContext : IdentityDbContext<User, Role, string>
    {
        #region DbSets

        public DbSet<Wish> Wishes { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<UserWish> UserWishes { get; set; }

        #endregion

        public WensAmbulanceContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }       
    }
}
