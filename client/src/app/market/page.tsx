'use client'
import { ProductCard } from "../../components/cards/ProductCard";
import { Box, Button, Grid } from "@mui/material";
import AddProductModal from "@client/src/components/modal/AddProductModal";
import Search from "@client/src/components/inputs/search";
import { grey } from "@mui/material/colors";
import Loader from "@client/src/components/loader/Loader";
import BuyProductModal from "@client/src/components/modal/BuyProductModal";
import useMarket from "./hooks/use-market";

function MarketPage() {
    const {
        products,
        selectedProduct,
        filteredProducts,
        loading,
        isAddProductModalOpen,
        isBuyProductModalOpen,
        addProduct,
        buyProduct,
        setFilteredProducts,
        setIsAddProductModalOpen,
        setIsBuyProductModalOpen
    } = useMarket();

    if (loading) return <Loader />;

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
                    <ProductCard key={`product_${idx}`} product={product} buyFn={buyProduct} />
                ))}
            </Grid>
            <AddProductModal open={isAddProductModalOpen} handleClose={() => setIsAddProductModalOpen(false)} />
            <BuyProductModal product={selectedProduct} open={isBuyProductModalOpen} handleClose={() => setIsBuyProductModalOpen(false)} />
        </Box >
    )
}

export default MarketPage;