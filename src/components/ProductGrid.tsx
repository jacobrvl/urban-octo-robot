import {useEffect, useState} from "react";
import styled from "@emotion/styled";
import {CircularProgress, Grid, Paper} from "@mui/material";


type Product = {
    awardList: never[];
    categorySubTypeCode: string;
    categorySubTypeEngName: string;
    categorySubTypeName: string;
    chipOptions: never[];
    familyId: string;
    familyRecord: string;
    filterParamText: null | string;
    fmyEngName: string;
    fmyMarketingName: string;
    iaCtaDisplay: string;
    isRecommended: null | string;
    localBenefitList: never[];
    modelCount: string;
    modelList: never[];
    oldProductYN: string;
    optionPriceUse: null | string;
    productGroupId: string;
    quickLooks: never[];
    simplePdYN: string;
    thirdPASeller: null | string;
    wtbDispFuncUseYN: null | string;
    wtbOnlineDispFuncUseYN: null | string;
}


const CenteredCircularProgress = styled(CircularProgress)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const StyledPaper = styled(Paper)`
    height: 200px;
    width: 200px
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
        <Grid container item spacing={2}
              justifyContent="center">
        {products.map((product: Product) =>
            (
            <Grid item key={product.familyId}>
                <StyledPaper/>
            </Grid>
            )
        )}
        </Grid>
  );
}

export default ProductGrid;