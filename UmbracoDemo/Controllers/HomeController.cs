using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;
using UmbracoDemo.ViewModels;

namespace UmbracoDemo.Controllers;

public class HomeController : RenderController
{
    private readonly ServiceContext _serviceContext;
    private readonly IVariationContextAccessor _variationContextAccessor;

    public HomeController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine,
        IUmbracoContextAccessor umbracoContextAccessor, ServiceContext serviceContext,
        IVariationContextAccessor variationContextAccessor) : base(logger, compositeViewEngine, umbracoContextAccessor)
    {
        _serviceContext = serviceContext;
        _variationContextAccessor = variationContextAccessor;
    }

    public override IActionResult Index()
    {
        var viewModel = new HomeViewModel(CurrentPage!,
            new PublishedValueFallback(_serviceContext, _variationContextAccessor))
        {
            BodyText = "Some random body text"
        };


        return CurrentTemplate(viewModel);
    }
}