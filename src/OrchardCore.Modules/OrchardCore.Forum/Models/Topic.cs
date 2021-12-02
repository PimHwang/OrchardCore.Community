using System;
using OrchardCore.ContentManagement;
//using OrchardCore.DisplayManagement.Shapes;

namespace OrchardCore.Community.Forum.Models
{
    public class Topic : ContentPart
    {
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdateAt { get; set; }

        public int State { get; set; }

        public DateTime StateAt { get; set; }

        public DateTime TouchedAt { get; set; }

        public string Name { get; set; }

        public int Usebt { get; set; }

        public UInt64 Owner { get; set; }

        public string Access { get; set; }

        public int SeqId { get; set; }

        public int DelId { get; set; }

        public string Public { get; set; }

        public string Tags { get; set; }

        
    }
}
