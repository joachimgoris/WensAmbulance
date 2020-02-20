using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Data;
using WensAmbulance.Domain;

namespace WensAmbulance.Business.Services
{
    public class WishService : IWishService
    {
        private readonly WensAmbulanceContext _context;

        public WishService(WensAmbulanceContext context)
        {
            _context = context;
        }

        public async Task<Wish> AddAsync(Wish entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
            return entity;
        }

        public async Task DeleteAsync(string entityId)
        {
            var wish = await _context.FindAsync<Wish>(entityId);
            if (wish == null)
                return;

            _context.Remove(wish);
            await _context.SaveChangesAsync();
        }

        public async Task<ICollection<Wish>> GetAllAsync()
        {
            return await _context.Wishes.ToListAsync();
        }

        public Task<ICollection<Wish>> GetByFilterAsync(Predicate<Wish> predicate)
        {
            throw new NotImplementedException();
        }

        public async Task<Wish> GetByIdAsync(string entityId)
        {
            return await _context.FindAsync<Wish>(entityId);
        }

        public async Task<Wish> UpdateAsync(Wish entity)
        {
            _context.Update(entity);
            await _context.SaveChangesAsync();
            return entity;
        }
    }
}
