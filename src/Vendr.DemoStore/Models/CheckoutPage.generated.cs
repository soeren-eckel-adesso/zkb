//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder.Embedded v9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Linq.Expressions;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PublishedCache;
using Umbraco.Cms.Infrastructure.ModelsBuilder;
using Umbraco.Cms.Core;
using Umbraco.Extensions;

namespace Vendr.DemoStore.Models
{
	/// <summary>Checkout Page</summary>
	[PublishedModel("checkoutPage")]
	public partial class CheckoutPage : Page
	{
		// helpers
#pragma warning disable 0109 // new is redundant
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		public new const string ModelTypeAlias = "checkoutPage";
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		public new static IPublishedContentType GetModelContentType(IPublishedSnapshotAccessor publishedSnapshotAccessor)
			=> PublishedModelUtility.GetModelContentType(publishedSnapshotAccessor, ModelItemType, ModelTypeAlias);
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		public static IPublishedPropertyType GetModelPropertyType<TValue>(IPublishedSnapshotAccessor publishedSnapshotAccessor, Expression<Func<CheckoutPage, TValue>> selector)
			=> PublishedModelUtility.GetModelPropertyType(GetModelContentType(publishedSnapshotAccessor), selector);
#pragma warning restore 0109

		private IPublishedValueFallback _publishedValueFallback;

		// ctor
		public CheckoutPage(IPublishedContent content, IPublishedValueFallback publishedValueFallback)
			: base(content, publishedValueFallback)
		{
			_publishedValueFallback = publishedValueFallback;
		}

		// properties

		///<summary>
		/// Logo: Choose a logo image to display on the checkout pages.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		[ImplementPropertyType("logo")]
		public virtual global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent Logo => this.Value<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent>(_publishedValueFallback, "logo");

		///<summary>
		/// Primary Color: The primary brand color to use for the checkout pages. Should be one of tailwind CSSs default colors. Defaults to blue-500.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		[ImplementPropertyType("primaryColor")]
		public virtual string PrimaryColor => this.Value<string>(_publishedValueFallback, "primaryColor");

		///<summary>
		/// Privacy Policy: Select the content page containing the site privacy policy.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		[ImplementPropertyType("privacyPolicy")]
		public virtual global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent PrivacyPolicy => this.Value<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent>(_publishedValueFallback, "privacyPolicy");

		///<summary>
		/// Terms of Service: Select the content page containing the sites terms of service.
		///</summary>
		[global::System.CodeDom.Compiler.GeneratedCodeAttribute("Umbraco.ModelsBuilder.Embedded", "9.0.0-beta004+c41d05f6a67e1d217d565d055a85231792520f88")]
		[ImplementPropertyType("termsOfService")]
		public virtual global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent TermsOfService => this.Value<global::Umbraco.Cms.Core.Models.PublishedContent.IPublishedContent>(_publishedValueFallback, "termsOfService");
	}
}
