using System;

namespace WensAmbulance.Domain.Dto
{
    public class PatientDto
    {
        public string Id { get; set; }

        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public DateTime BirthDate { get; set; }

        public string PickUpLocation { get; set; }

        public string DNRCode { get; set; }

        public string Accessibility { get; set; }

        public string MedicalNotes { get; set; }
    }
}