import ProductsComponent from "../components/products-component/ProductsComponent.tsx";
import PaginationComponent from "../components/pagination-component/PaginationComponent.tsx";

const ProductsPage = () => {
    return (
        <div>
            <ProductsComponent/>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default ProductsPage;