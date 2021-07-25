using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using OrchardCore.Modules;
using OrchardCore.Navigation;

namespace OrchardCore.Community.Forum
{
    public class Startup : StartupBase
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<INavigationProvider, AdminMenu>();
            services.AddScoped<IModularTenantEvents, MyStartupTaskService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public override void Configure(IApplicationBuilder app, IEndpointRouteBuilder routes,IServiceProvider serviceProvider)
        {
            routes.MapAreaControllerRoute(
                name:"Home",
                areaName:"Forum",
                pattern:"Home/Index",
                defaults:new {controller= "Home",action="Index"}
            );
        }
    }
}
