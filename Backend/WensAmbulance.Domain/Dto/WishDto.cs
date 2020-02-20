using System;
using System.Collections.Generic;
using System.Text;

namespace WensAmbulance.Domain.Dto
{
    public class WishDto
    {
        public string WishRequestor { get; set; }

        public string RequestorEmail { get; set; }

        public string RequestorPhoneNumber { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string Location { get; set; }

        public List<User> Volunteers { get; set; }
    }
}
