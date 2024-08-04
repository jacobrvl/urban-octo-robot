import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {CircularProgress, Grid} from "@mui/material";
import {Product} from "../types/types.ts";
import ProductFamilyCard from "./ProductFamilyCard.tsx";

const CenteredCircularProgress = styled(CircularProgress)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

function ProductGrid() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
        const apiUrl: string = import.meta.env.VITE_API_URL;
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    setIsError(true);
                    throw new Error("Failed to fetch products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data.response.resultData.productList);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <CenteredCircularProgress/>
        )
    }

    if (isError) {
        return (
            <div>Failed to fetch products</div>
        )
    }

    return (
        <Grid container item spacing={2} justifyContent="center">
        {products.map((product: Product) => <ProductFamilyCard product={product} key={product.familyId}/>)}
        </Grid>
  );
}

export default ProductGrid;