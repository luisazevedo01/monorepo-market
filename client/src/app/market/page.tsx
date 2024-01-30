'use client'
import { PRODUCTS } from "@client/src/graphql/queries/product";
import { ProductCard } from "../../components/cards/ProductCard";
import { useQuery } from "@apollo/client";
import { useEffect, useMemo, useState } from "react";
import { Box, Button, CircularProgress, Grid, Paper } from "@mui/material";
import AddProductModal from "@client/src/components/modal/AddProductModal";
import Search from "@client/src/components/inputs/search";
import { grey } from "@mui/material/colors";
import { ClipLoader } from "react-spinners";
import Loader from "@client/src/components/loader/Loader";

export default function Market() {
    const [isOpen, setIsOpen] = useState(false);
    const { loading, data } = useQuery(PRODUCTS, { variables: { ownerId: 1 } });


    const products = useMemo(() => {
        return data?.products;
    }, [data])

    const [filteredProducts, setFilteredProducts] = useState<[] | undefined>(products);

    const addProduct = () => {
        setIsOpen(true)
    }

    if (loading) return <Loader color="secondary" />;

    return (
        <Box sx={{ backgroundColor: grey[100] }}>
            <Grid
                container
                padding={2}
                alignItems='center'
                justifyContent='left'
                gap='8px'
            >
                <Button onClick={addProduct} variant="contained" color="success">Adicionar Produto</Button>
                <Search products={products} setProduct={setFilteredProducts} />
            </Grid>
            <Grid
                container
                minHeight="100vh"
                alignItems='center'
                justifyContent="center"
                wrap="wrap"
                padding={"5%"}
            >
                {filteredProducts?.map((product: any, idx: any) => (
                    <ProductCard key={`product_${idx}`} img={product.image} title={product.title} price={product.price} />
                ))}
            </Grid>
            <AddProductModal open={isOpen} handleClose={() => setIsOpen(false)} />
        </Box >
    )
}