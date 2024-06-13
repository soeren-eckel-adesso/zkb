using Umbraco.Cms.Core.Manifest;

namespace Electronic.Visa.Frontend.Umbraco.Web.Cms;

internal sealed class ZkbManifestFilter : IManifestFilter
{
    public void Filter(List<PackageManifest> manifests)
    {
        manifests.Add(new PackageManifest
        {
            PackageName = "ZKB",
            Scripts = new[]
            {
                "/App_Plugins/PropertyEditors/KeyValuePairs/KeyValuePairsPrevalueController.js"
            }
        });
    }
}