using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WensAmbulance.Business.Abstractions;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain;

namespace WensAmbulance.Business.Services
{
    public class WishService : IWishService
    {
        public Task<Wish> AddAsync(Wish entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(string entityId)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Wish>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Wish>> GetByFilterAsync(Predicate<Wish> predicate)
        {
            throw new NotImplementedException();
        }

        public Task<Wish> GetByIdAsync(string entityId)
        {
            throw new NotImplementedException();
        }

        public Task<Wish> UpdateAsync(Wish entity)
        {
            throw new NotImplementedException();
        }
    }
}
