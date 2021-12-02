using OrchardCore.ContentManagement.Metadata;
using OrchardCore.ContentManagement.Metadata.Settings;
using OrchardCore.Data.Migration;

namespace OrchardCore.Community.Forum
{
    public class Migrations : DataMigration
    {
        private IContentDefinitionManager _contentDefinitionManager;

        public Migrations(IContentDefinitionManager contentDefinitionManager)
        {
            _contentDefinitionManager = contentDefinitionManager;
        }

        public int Create()
        {
            _contentDefinitionManager.AlterTypeDefinition("Product", type => type
                .Creatable()
                .WithPart("Product")
            );

            _contentDefinitionManager.AlterPartDefinition("Product", part => part
                .WithField("Image", field => field
                    .OfType("MediaField")
                    .WithDisplayName("Main image")
                )
                .WithField("Price", field => field
                    .OfType("NumericField")
                    .WithDisplayName("Price")
                )
            );

            //_contentDefinitionManager.AlterTypeDefinition("Product", type => type
            //    .Draftable()
            //    .Versionable()
            //    .Creatable()
            //    .Securable()
            //    .WithPart("AutoroutePart", part => part
            //        .WithPosition("2")
            //    )
            //);

            return 1;
        }
    }
}
