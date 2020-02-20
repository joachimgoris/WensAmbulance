using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WensAmbulance.Domain;

namespace WensAmbulance.Data.Configurations
{
    internal class PatientConfiguration : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder.ToTable("patients");

            builder.HasKey(p => p.PatientId);
        }
    }
}
