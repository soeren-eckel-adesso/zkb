using Umbraco.Forms.Core;
using Umbraco.Forms.Core.Enums;
using UmbracoDemo.Composers.Attributes;

namespace UmbracoDemo.Composers.FieldTypes;

/// <summary>
///     Provides a an text field type for a form (containing a mark down text).
/// </summary>
[Serializable]
public class MarkDownText : FieldType
{
    private const string _NAME = "Markdown Text";
    private const string _ALIAS = "markdownText";

    private const string _DESCRIPTION =
        "This is used to render mark down text. (See also https://github.com/tchapi/markdown-cheatsheet/)";

    public static readonly Guid FieldTypeId = new("87B6AC47-E856-4A9B-8EDF-FC2F1081D285");

    /// <summary>
    ///     Initializes a new instance of the <see cref="MarkDownText" /> class.
    /// </summary>
    public MarkDownText()
    {
        Id = FieldTypeId;
        Name = _NAME;
        Alias = _ALIAS;
        Description = _DESCRIPTION;
        Icon = "icon-edit";
        DataType = FieldDataType.String;
        Category = "Simple";
        SortOrder = 8;
        FieldTypeViewName = "FieldType.MarkdownText.cshtml";
    }

    [DisplayTextInAlertBoxSetting] public string DisplayTextInAlertBox { get; set; } = string.Empty;

    /// <inheritdoc />
    public override bool HideLabel => true;

    /// <inheritdoc />
    public override bool StoresData => false;

    /// <inheritdoc />
    public override bool SupportsMandatory => false;

    public override string GetDesignView()
    {
        return "~/App_Plugins/UmbracoForms/backoffice/Common/FieldTypes/text.html";
    }
}