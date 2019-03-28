using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace samplewebapp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            new WebHostBuilder()
.UseKestrel()
.UseContentRoot(Directory.GetCurrentDirectory())
.UseStartup<Startup>()
.Build()
.Run();
        }

        public static IWebHost BuildWebHost(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args)
.UseStartup<Startup>()
.Build();
        }
    }
}
