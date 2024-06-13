using Umbraco.Cms.Core.PropertyEditors;

namespace UmbracoDemo.Cms.PropertyEditors;

[DataEditor("KeyValuePairs", EditorType.MacroParameter, "Key-Value Pairs",
    "~/App_Plugins/PropertyEditors/KeyValuePairs/KeyValuePairs.Prevalue.html", Group = "Data",
    Icon = "icon-list")]
public class KeyValuePairsDataEditor
    : DataEditor
{
    public KeyValuePairsDataEditor(IDataValueEditorFactory dataValueEditorFactory)
        : base(dataValueEditorFactory)
    {
    }
}