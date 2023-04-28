using Umbraco.Cms.Core.Composing;
using Umbraco.Forms.Core.Services.Notifications;

namespace Vendr.DemoStore.Web;

public class Services : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.AddNotificationHandler<FormSavingNotification, FormSavingNotificationHandler>();
    }
}