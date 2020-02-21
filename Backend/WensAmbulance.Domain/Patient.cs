using System;

namespace WensAmbulance.Domain
{
    public class Patient
    {
        public string PatientId { get; set; }  = Guid.NewGuid().ToString();

        public string Firstname { get; set; }
        
        public string Lastname { get; set; }

        public DateTime BirthDate { get; set; }

        public string PickupLocation { get; set; }

        public string DNRCode { get; set; }

        public string Accessibility { get; set; }

        public string MedicalNotes { get; set; }
    }
}
