using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using OrchardCore.Modules;

public class MyStartupTaskService : ModularTenantEvents
{
    private readonly ILogger<MyStartupTaskService> _logger;

    public MyStartupTaskService(ILogger<MyStartupTaskService> logger)
    {
        _logger = logger;
    }

    public override Task ActivatingAsync()
    {
        _logger.LogInformation("A tenant has been activated.");
        return Task.CompletedTask;
    }
}