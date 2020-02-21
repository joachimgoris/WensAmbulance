using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WensAmbulance.Domain;

namespace WensAmbulance.Data.Configurations
{
    internal class WishConfiguration : IEntityTypeConfiguration<Wish>
    {
        public void Configure(EntityTypeBuilder<Wish> builder)
        {
            builder.ToTable("wishes");

            builder.HasKey(w => w.WishId);
        }
    }
}
