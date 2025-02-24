import {CollectionConfig} from "payload";
import {slugField} from "@/fields/slug";

export const Products: CollectionConfig<'products'> = {
    slug: 'products',
    defaultPopulate: {
        title: true,
        slug: true,
        featuredImage: true,
        description: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'featuredImage',
            label:'Featured Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin:{
                position: 'sidebar',
            }
        },
        {
            name: 'description',
            type: 'textarea'
        },
        ...slugField(),
    ],
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    versions: {
        drafts: {
            autosave: {
                interval: 100, // We set this interval for optimal live preview
            },
            schedulePublish: true,
        },
        maxPerDoc: 50,
    },
}