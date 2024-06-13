using Umbraco.Cms.Core.Composing;
using Umbraco.Forms.Core.Providers;

namespace UmbracoDemo.Composers.FieldTypes;

public class FieldTypeComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.WithCollectionBuilder<FieldCollectionBuilder>().Add<ButtonList>().Add<MarkDownText>();
    }
}