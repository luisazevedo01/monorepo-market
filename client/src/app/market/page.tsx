'use client'
import { PRODUCTS } from "@client/src/graphql/queries/product";
import { ProductCard } from "../../components/cards/ProductCard";
import { MOCKED_PRODUCTS } from "../../constants/mocked-products";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { TestCard } from "@client/src/components/cards/TestCard";
import Modal from "@client/src/components/modal/AddProductModal";
import { Button, Grid } from "@mui/material";
import AddProductModal from "@client/src/components/modal/AddProductModal";

export default function Market() {
    const [isOpen, setIsOpen] = useState(false);
    const { loading, data } = useQuery(PRODUCTS, { variables: { ownerId: 1 } });

    const products = useMemo(() => {
        console.log("products: ", data?.products);
        return data?.products;
    }, [data])

    const addProduct = () => {
        setIsOpen(true)
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div className="bg-lime-200">
            <div className="flex justify-center p-5">
                <Button onClick={addProduct} variant="contained" color="success">Adicionar Produto</Button>
            </div>
            <Grid
                container
                minHeight="100vh"
                alignItems='center'
                justifyContent="space-between"
                wrap="wrap"
                padding={20}
            >
                {(products?.length ? products : MOCKED_PRODUCTS).map((product: any, idx: any) => (
                    <ProductCard key={`product_${idx}`} img={product.image} title={product.title} price={product.price} />
                ))}
            </Grid>
            <AddProductModal open={isOpen} handleClose={() => setIsOpen(false)} />
        </div>
    )
}