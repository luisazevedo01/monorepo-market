'use client'
import { PRODUCTS } from "@client/src/graphql/queries/product";
import { ProductCard } from "../../components/cards/ProductCard";
import { MOCKED_PRODUCTS } from "../../constants/mocked-products";
import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { TestCard } from "@client/src/components/cards/TestCard";
import Modal from "@client/src/components/modal/AddProductModal";
import { Button, Grid } from "@mui/material";
import AddProductModal from "@client/src/components/modal/AddProductModal";
import Search from "@client/src/components/inputs/search";

export default function Market() {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState();
    const { loading, data } = useQuery(PRODUCTS, { variables: { ownerId: 1 } });
    
    const products = useMemo(() => {
        return data?.products;
    }, [data])

    const addProduct = () => {
        setIsOpen(true)
    }

    if (loading) return <p>Loading...</p>;

    return (
        <div className="bg-lime-200">
            <div className="flex justify-center py-5">
                <Button onClick={addProduct} variant="contained" color="success">Adicionar Produto</Button>
            </div>
            <Search products={products} setProduct={setFilteredProducts}/>
            <Grid
                container
                minHeight="100vh"
                alignItems='center'
                justifyContent="center"
                wrap="wrap"
                padding={20}
            >
                {(filteredProducts ? filteredProducts : products).map((product: any, idx: any) => (
                    <ProductCard key={`product_${idx}`} img={product.image} title={product.title} price={product.price} />
                ))}
            </Grid>
            <AddProductModal open={isOpen} handleClose={() => setIsOpen(false)} />
        </div>
    )
}