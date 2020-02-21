namespace WensAmbulance.Domain
{
    public class UserWish
    {
        public string VolunteerId { get; set; }

        public User Volunteer { get; set; }

        public string WishId { get; set; }

        public Wish Wish { get; set; }
    }
}
