using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WensAmbulance.Business.Abstractions
{
    public interface ICRUDService<T> where T : class
    {
        Task<T> AddAsync(T entity);

        Task DeleteAsync(string entityId);

        Task<T> UpdateAsync(T entity);

        Task<ICollection<T>> GetAllAsync();

        Task<T> GetByIdAsync(string entityId);

        Task<ICollection<T>> GetByFilterAsync(Predicate<T> predicate);
    }
}
