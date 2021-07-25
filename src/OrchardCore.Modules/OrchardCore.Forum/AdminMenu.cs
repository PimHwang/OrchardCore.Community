using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Localization;
using OrchardCore.Navigation;

namespace OrchardCore.Community.Forum
{
    public class AdminMenu : INavigationProvider
    {
        private readonly IStringLocalizer S;

        public AdminMenu(IStringLocalizer<AdminMenu> localizer)
        {
            S = localizer;
        }

        public Task BuildNavigationAsync(string name, NavigationBuilder builder)
        {
            // We want to add our menus to the "admin" menu only.
            if (!String.Equals(name, "admin", StringComparison.OrdinalIgnoreCase))
            {
                return Task.CompletedTask;
            }

            // Adding our menu items to the builder.
            // The builder represents the full admin menu tree.
            builder
                .Add(S["My Root View"], "after",  rootView => rootView               
                    .Add(S["Child One"],"1", childOne => childOne
                        .Action("ChildOne", "Home", new { area = "OrchardCore.Community"}))
                    .Add(S["Child Two"], "2", childTwo => childTwo
                        .Action("ChildTwo", "Home", new { area = "OrchardCore.Community"})));

            return Task.CompletedTask;
        }
    }
}