#pragma checksum "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "c3cef86b0964e5ce3d6356c5bbd2c12239e69e4b"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Info_Hello), @"mvc.1.0.view", @"/Views/Info/Hello.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "A:\Hung\Code\JS\Common\Localization.3.x\Views\_ViewImports.cshtml"
using Localization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "A:\Hung\Code\JS\Common\Localization.3.x\Views\_ViewImports.cshtml"
using Localization.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "A:\Hung\Code\JS\Common\Localization.3.x\Views\_ViewImports.cshtml"
using Localization.ViewModels.Account;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "A:\Hung\Code\JS\Common\Localization.3.x\Views\_ViewImports.cshtml"
using Localization.ViewModels.Manage;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "A:\Hung\Code\JS\Common\Localization.3.x\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Identity;

#line default
#line hidden
#nullable disable
#nullable restore
#line 1 "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml"
using Microsoft.AspNetCore.Mvc.Localization;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c3cef86b0964e5ce3d6356c5bbd2c12239e69e4b", @"/Views/Info/Hello.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"71909c8888a46309abdf80f92d96c3ef6f635a4f", @"/Views/_ViewImports.cshtml")]
    public class Views_Info_Hello : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
            WriteLiteral("\r\n");
#nullable restore
#line 5 "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml"
  
    ViewData["Title"] = Localizer["About"];

#line default
#line hidden
#nullable disable
            WriteLiteral("<h2>");
#nullable restore
#line 8 "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml"
Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(".</h2>\r\n<h3>");
#nullable restore
#line 9 "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml"
Write(ViewData["Message"]);

#line default
#line hidden
#nullable disable
            WriteLiteral("</h3>\r\n\r\n<p>");
#nullable restore
#line 11 "A:\Hung\Code\JS\Common\Localization.3.x\Views\Info\Hello.cshtml"
Write(Localizer["Use this area to provide additional information."]);

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public IViewLocalizer Localizer { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591