import {Block} from "payload";

export const FeaturedProducts: Block = {
    slug: 'featuredProducts',
    interfaceName: 'FeaturedProductsBlock',
    imageURL: 'https://www.vinzan.com/wp-content/uploads/2022/09/vinzan-nutrients.jpg.webp',
    fields: [
        {
            name: 'products',
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
            admin: {
                allowCreate: false,
                allowEdit: false,
                isSortable: true
            }
        },
    ],
}