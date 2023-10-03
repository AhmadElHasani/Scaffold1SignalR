using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

public class ViewHub : Hub
{
    private static int ViewCount {get;set;} = 0;

    public async Task IncrementServerView()
    {
        ViewCount++;

        // notify EVERYONE about new view count
        await Clients.All.SendAsync("viewCoutnUpdate", ViewCount);
    }
}