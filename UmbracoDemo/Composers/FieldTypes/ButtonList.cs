using Umbraco.Forms.Core.Providers.FieldTypes;

namespace UmbracoDemo.Composers.FieldTypes;

public sealed class ButtonList : RadioButtonList
{
    public ButtonList()
    {
        Id = new Guid("e9cb7021-a052-42cb-9744-de2a8028178d");
        Name = "Button List";
        FieldTypeViewName = "FieldType.ButtonList.cshtml";
    }

    public override int SortOrder => 101;

    public override bool SupportsPreValues => true;

    public override string GetDesignView()
    {
        return "~/App_Plugins/UmbracoForms/backoffice/Common/FieldTypes/radiobuttonlist.html";
    }
}