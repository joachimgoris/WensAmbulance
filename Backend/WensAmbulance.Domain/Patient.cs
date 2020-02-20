﻿using System;

namespace WensAmbulance.Domain
{
    public class Patient
    {
        public string Name { get; set; }

        public DateTime BirthDate { get; set; }

        public string PickUpLocation { get; set; }

        public string DNRCode { get; set; }

        public string Accessibility { get; set; }

        public string MedicalNotes { get; set; }
    }
}
