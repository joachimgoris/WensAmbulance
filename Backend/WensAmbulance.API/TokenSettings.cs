namespace WensAmbulance.API
{
    public class TokenSettings
    {
        public virtual string Key { get; set; }
        public virtual string Issuer { get; set; }
        public virtual string Audience { get; set; }
        public virtual int ExpirationTimeInMinutes { get; set; }
    }
}
