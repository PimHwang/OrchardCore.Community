using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace OrchardCore.Community
{
    public class Startup
    {
        private readonly IHostEnvironment _env;

        public Startup(IHostEnvironment environment)
        {
            _env = environment;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSpaStaticFiles(spa => spa.RootPath = "ClientApp/build");
            services.AddOrchardCms();            
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseSpaStaticFiles();
            app.Map("/app", spaApp =>
            {
                spaApp.UseSpa(spa =>
                {
                    //spa.Options.SourcePath = System.IO.Path.Join(_env.ContentRootPath, "~/OrchardCore.Forum/");
                    spa.Options.SourcePath = "ClientApp";
                    if (_env.IsDevelopment())
                    {
                        //spa.UseReactDevelopmentServer(npmScript: "start");
                    }
                });
            });

            app.UseOrchardCore();
        }
    }
}
