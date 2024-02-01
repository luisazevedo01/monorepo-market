import { useQuery } from "@apollo/client";
import { PRODUCTS } from "@client/src/graphql/queries/product";
import { useMemo, useState } from "react";

export default function useMarket() {
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [isBuyProductModalOpen, setIsBuyProductModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({});
    const { loading, data } = useQuery(PRODUCTS, { variables: { ownerId: 1 } });


    const products = useMemo(() => {
        return data?.products;
    }, [data])

    const [filteredProducts, setFilteredProducts] = useState<[] | undefined>(products);

    const addProduct = () => {
        setIsAddProductModalOpen(true);
    }

    const buyProduct = (product: any) => {
        setSelectedProduct(product);
        setIsBuyProductModalOpen(true);
    }

    return {
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
    }
}