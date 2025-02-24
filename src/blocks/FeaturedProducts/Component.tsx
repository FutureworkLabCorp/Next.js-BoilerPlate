import {Media} from "@/components/Media";
import Link from "next/link";
import React from "react";
import {FeaturedProductsBlock} from "@/payload-types";

export const FeaturedProducts = ({products, id}: FeaturedProductsBlock) => {
    return (
        <div id={`block-${id}`} className="container">
            <h1>Featured Products</h1>

            <div className="vii-featured-products fl-grid ps-relative ai-start wpb_content_element">
                <div className="vii-featured-products__nav d-flex fd-column t ps-sticky l0">
                    <div className="vii-featured-products__nav__items">
                        {products?.map((product, index) => (
                            (
                                typeof product !== 'string' &&
                                <h2 key={index} className="vii-featured-products__nav-heading">
                                    <button className="tt-lowercase fw-bold ta-left">{product.title}</button>
                                </h2>
                            )
                        ))}

                    </div>
                </div>
                <div className="vii-featured-products__items grid grid-cols-1 gap-8 md:grid-cols-2">
                    {products?.map((product, index) => (
                        typeof product !== 'string' &&
                        <div key={index} className="vii-product-item">
                            <Link className="vii-product-item__inner"
                                  href={`/products/${product.slug}`}
                                  title="inputs"
                                  data-id="inputs-439">
                                <div className="vii-product-item__thumbnail">
                                    <div className="vii-product-item__thumbnail-bg">
                                        <Media resource={product.featuredImage}/>
                                    </div>
                                </div>
                                <div className="vii-product-item__info">
                                    <h2 className="vii-product-item__title">{product?.title}</h2>
                                    <div className="vii-product-item__excerpt margin-bottom-25px">
                                        {product.description}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};