using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

using OrchardCore.ContentManagement;
using OrchardCore.Data.Migration;
using OrchardCore.Modules;
using OrchardCore.Navigation;

using OrchardCore.Community.Forum.Models;

namespace OrchardCore.Community.Forum
{
    public class Startup : StartupBase
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddContentPart<Product>();

            services.AddScoped<INavigationProvider, AdminMenu>();
            services.AddScoped<IModularTenantEvents, MyStartupTaskService>();
            services.AddScoped<IDataMigration, Migrations>();
        }

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
