import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
    slug: 'events',
    fields: [
        {
          name: 'name',
          type: 'text',
        }
    ]    
}