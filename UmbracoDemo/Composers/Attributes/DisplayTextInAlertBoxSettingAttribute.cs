using Umbraco.Forms.Core.Attributes;
using UmbracoDemo.Enumerations;

namespace UmbracoDemo.Composers.Attributes;

public class DisplayTextInAlertBoxSettingAttribute : Setting
{
    /// <summary>
    ///     Name for display in form editor
    ///     <seealso cref="Setting" />
    /// </summary>
    private const string _NAME = "Display text in alert box";

    // <summary>
    /// Description in form editor
    /// <seealso cref="Setting" />
    /// </summary>
    private const string _DESCRIPTION =
        "If set, text is shown in an alert box. Examples: https://getbootstrap.com/docs/5.3/components/alerts/";

    // <summary>
    /// Order for display item in form editor
    /// <seealso cref="Setting" />
    /// </summary>
    private const int _ORDER = 190;

    public DisplayTextInAlertBoxSettingAttribute() : base(_NAME)
    {
        Description = _DESCRIPTION;
        DisplayOrder = _ORDER;
        PreValues = string.Join(',', Enum.GetNames<Alerts>());
        View = "dropdownlist";
    }
}