'use client'
import { PRODUCTS } from "@client/src/graphql/queries/product";
import { ProductCard } from "../../components/cards/ProductCard";
import { MOCKED_PRODUCTS } from "../../constants/mocked-products";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

export default function Market() {
    const { loading, data } = useQuery(PRODUCTS, { variables: { ownerId: 1 } });

    const products = useMemo(() => {
        return data?.products;
    }, [data])

    if (loading) return <p>Loading...</p>;
    console.log("products: ", products);

    const addProduct = () => {

    }

    return (
        <div className="p-20 bg-lime-200 flex flex-wrap justify-center max-w">
            <button onClick={addProduct}>Add product</button>
            {(products.length ? products : MOCKED_PRODUCTS).map((product: any, idx: any) => (
                <ProductCard key={`product_${idx}`} img={product.image} title={product.title} price={product.price} />
            ))}
        </div>
    )
}