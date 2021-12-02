using OrchardCore.ContentFields.Fields;
using OrchardCore.ContentManagement;
using OrchardCore.Media.Fields;

namespace OrchardCore.Community.Forum.Models
{
    public class Product : ContentPart
    {
        public MediaField Image { get; set; }
        public NumericField Price { get; set; }
    }

}
