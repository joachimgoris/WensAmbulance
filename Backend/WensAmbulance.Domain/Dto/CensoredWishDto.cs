﻿using System;

namespace WensAmbulance.Domain.Dto
{
    public class CensoredWishDto
    {
        public string WishId { get; set; }

        public DateTime Date { get; set; }

        public string Location { get; set; }
    }
}
