using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain;

namespace WensAmbulance.Business.Services
{
    public class PatientService : IPatientService
    {
        public Task<Patient> AddAsync(Patient entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(string entityId)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Patient>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Patient>> GetByFilterAsync(Predicate<Patient> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<Patient> GetByIdAsync(string entityId)
        {
            throw new NotImplementedException();
        }

        public Task<Patient> UpdateAsync(Patient entity)
        {
            throw new NotImplementedException();
        }
    }
}
