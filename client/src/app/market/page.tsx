import { ProductCard } from "../../components/cards/ProductCard";
import { MOCKED_PRODUCTS } from "../../constants/mocked-products";

export default function Market() {
    return (
        <div className="p-20 bg-lime-200 flex flex-wrap justify-center max-w">
            {MOCKED_PRODUCTS.map((product, idx) => (
                <ProductCard key={`product_${idx}`} img={product.img} title={product.title} price={product.price} />
            ))}
        </div>
    )
}