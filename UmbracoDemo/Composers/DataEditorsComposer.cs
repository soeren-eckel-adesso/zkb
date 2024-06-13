using Umbraco.Cms.Core.Composing;
using UmbracoDemo.Cms.PropertyEditors;

namespace UmbracoDemo.Composers;

public class DataEditorsComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.DataEditors().Add<KeyValuePairsDataEditor>();
    }
}