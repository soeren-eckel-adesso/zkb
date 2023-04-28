using Umbraco.Cms.Core.Events;
using Umbraco.Forms.Core.Services.Notifications;

namespace Vendr.DemoStore.Web;

public class FormSavingNotificationHandler : INotificationHandler<FormSavingNotification>
{
    public void Handle(FormSavingNotification notification)
    {
        notification.CancelOperation(new EventMessage("Error", "Test Error"));
    }
}