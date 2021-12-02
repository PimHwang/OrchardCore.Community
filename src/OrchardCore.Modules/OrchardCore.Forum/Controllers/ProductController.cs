using System.Threading.Tasks;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using OrchardCore.Admin;
using OrchardCore.ContentManagement;
using OrchardCore.ContentManagement.Handlers;
using OrchardCore.ContentManagement.Display;
using OrchardCore.DisplayManagement.ModelBinding;
using OrchardCore.Contents;
using OrchardCore.Community.Forum.Models;
using OrchardCore.Users;
using OrchardCore.Users.Models;
using YesSql;

namespace OrchardCore.Forum.Controllers
{
    public class ProductController : Controller
    {
        private readonly IOrchardHelper _orchardHelper;
        private readonly IContentManager _contentManager;
        private readonly UserManager<IUser> _userManager;

        public ProductController(IOrchardHelper orchardHelper, 
            IContentManager contentManager, 
            UserManager<IUser> userManager)
        {
            _orchardHelper = orchardHelper;
            _contentManager = contentManager;
            _userManager = userManager;
        }

        [HttpGet("/api/product/{productId}")]
        public async Task<ObjectResult> GetProductAsync(string productId)
        {
            /*
            var user = await _userManager.FindByIdAsync(productId) as User;
            if (user != null)
            {
                user.Properties["custom"] = "custom";                
                var result = await _userManager.UpdateAsync(user);
                var newitem = _contentManager.NewAsync("Tinode").Result.Merge(user.Properties["Tinode"]).As<Tinode>();
                return new ObjectResult(newitem);
            }*/

            var product = await _orchardHelper.GetContentItemByIdAsync(productId);

            if (product == null)
            {
                return new ObjectResult(null);
            }

            var productPart = product.As<Product>();

            //productPart.Price.Value = 1001;
            //product.Apply(productPart); 
            //await _contentManager.UpdateAsync(product);

            return new ObjectResult(new
            {
                Image = productPart.Image.Paths.FirstOrDefault(),
                Price = productPart.Price.Value,
            });
        }

        //[HttpPost("/api/product/")]
        //public async Task<ContentValidateResult> UpdateProductPriceAsync(string productId)
        //{
        //    //this call will only fetch published content item, which makes publishing after update redundant
        //    var product = await _orchardHelper.GetContentItemByIdAsync(productId);

        //    if (product == null)
        //    {
        //        return null;
        //    }

        //    var productPart = product.As<Product>();
        //    productPart.Price.Value = 1001;

        //    product.Apply(productPart); //apply modified part to a content item

        //    await  _contentManager.UpdateAsync(product); //update will fire handlers which could alter the content item.

        //    //validation will cancel changes if product is not valid. It's fired after update since handlers could change the object.
        //    return await _contentManager.ValidateAsync(product);
        //}

    }
}
