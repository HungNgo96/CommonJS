using Microsoft.Extensions.Configuration;

namespace AIA.ROBO.Core.Configs
{
    public class AppSettings
    {
        public static AppSettings Instance { get; set; }
        public static IConfiguration Configs { get; set; }

        public SampleSettings SampleSettings { get; set; }

        public string Item1 { get; set; }
        public string SecretItem { get; set; }
    }

    public class SampleSettings
    {
        public int SecretNumber { get; set; }
        public string SampleString { get; set; }
    }
}
