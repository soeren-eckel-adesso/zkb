using Umbraco.Cms.Core.Models.PublishedContent;

namespace UmbracoDemo.ViewModels;

public class HomeViewModel : PublishedContentWrapped
{
    public HomeViewModel(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
        : base(content, publishedValueFallback)
    {
    }

    public string BodyText { get; set; }
}