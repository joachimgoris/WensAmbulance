using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WensAmbulance.Domain;

namespace WensAmbulance.Data.Configurations
{
    internal class UserWishConfiguration : IEntityTypeConfiguration<UserWish>
    {
        public void Configure(EntityTypeBuilder<UserWish> builder)
        {
            builder.ToTable("user_wish");

            builder.HasKey(uw => new { uw.VolunteerId, uw.WishId });

            builder.HasOne(uw => uw.Volunteer)
                   .WithMany(v => v.UserWishes)
                   .HasForeignKey(uw => uw.VolunteerId);

            builder.HasOne(uw => uw.Wish)
                   .WithMany(w => w.UserWishes)
                   .HasForeignKey(uw => uw.WishId);
        }
    }
}
