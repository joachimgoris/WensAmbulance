using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Data;
using WensAmbulance.Domain;

namespace WensAmbulance.Business.Services
{
    public class PatientService : IPatientService
    {
        private readonly WensAmbulanceContext _context;

        public PatientService(WensAmbulanceContext context)
        {
            _context = context;
        }

        public async Task<Patient> AddAsync(Patient entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(string entityId)
        {
            var patient = await _context.FindAsync<Patient>(entityId);
            if (patient == null)
                return;

            _context.Remove(patient);
            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<Patient>> GetAllAsync()
        {
            return await _context.Patients.ToListAsync();
        }

        public Task<ICollection<Patient>> GetByFilterAsync(Predicate<Patient> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task<Patient> GetByIdAsync(string entityId)
        {
            return await _context.FindAsync<Patient>(entityId);
        }

        public async Task<Patient> UpdateAsync(Patient entity)
        {
            _context.Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
