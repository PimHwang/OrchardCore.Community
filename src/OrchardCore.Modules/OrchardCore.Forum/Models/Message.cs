using System;
using OrchardCore.ContentManagement;

namespace OrchardCore.Community.Forum.Models
{
    public class Message : ContentPart
    {
        public int Id { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdateAt { get; set; }

        public DateTime DeletedAt { get; set; }

        public int SeqId { get; set; }

        public int DelId { get; set; }

        public string Topic { get; set; }

        public int From { get; set; }

        public string Head { get; set; }

        public new string Content { get; set; }
    }
}
