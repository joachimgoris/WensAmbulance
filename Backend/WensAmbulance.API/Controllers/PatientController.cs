using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WensAmbulance.Business.Abstractions.Services;
using WensAmbulance.Domain.Dto;

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
        public async Task<ActionResult<PatientDto>> GetByIdAsync(string patientId)
        {
            await _patientService.GetByIdAsync(patientId);
            return Ok("Endpoint works.");
        }

        [HttpGet]
        public async Task<ActionResult<List<PatientDto>>> GetAllAsync()
        {
            return Ok("Endpoint works.");
        }

        [HttpDelete("{patientId}")]
        public async Task<ActionResult> DeleteAsync(string patientId)
        {
            return Ok("Endpoint works.");
        }

        [HttpPost]
        public async Task<ActionResult<PatientDto>> AddAsync([FromBody] PatientDto patientDto)
        {
            return Ok("Endpoint works.");
        }

        [HttpPut]
        public async Task<ActionResult> PutAsync([FromBody] PatientDto patientDto)
        {
            return Ok("Endpoint works.");
        }
    }
}
