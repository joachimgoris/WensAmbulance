using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain;

namespace WensAmbulance.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientService _patientService;

        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpGet("{patientId}")]
        public async Task<ActionResult<Patient>> GetByIdAsync(string patientId)
        {
            return Ok(await _patientService.GetByIdAsync(patientId));
        }

        [HttpGet]
        public async Task<ActionResult<List<Patient>>> GetAllAsync()
        {
            return Ok(await _patientService.GetAllAsync());
        }

        [HttpDelete("{patientId}")]
        public async Task<ActionResult> DeleteAsync(string patientId)
        {
            await _patientService.DeleteAsync(patientId);
            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> AddAsync([FromBody] Patient patient)
        {
            await _patientService.AddAsync(patient);
            return Ok(patient);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateAsync([FromBody] Patient patient)
        {
            return Ok(await _patientService.UpdateAsync(patient));
        }
    }
}
