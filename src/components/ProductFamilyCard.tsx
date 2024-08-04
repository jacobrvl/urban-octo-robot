import {Grid, Paper} from "@mui/material";
import {Product} from "../types/types.ts";
import styled from "@emotion/styled";


const StyledPaper = styled(Paper)`
    height: 200px;
    width: 200px;
    padding: 8px;
    position: relative;

    &:hover div {
        visibility: visible;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const ProductName = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 8px;
    border-radius: 4px;
    user-select: none;
`;


function ProductFamilyCard({product}: {product: Product}){

    return(
        <Grid item>
            <StyledPaper>
                <StyledImage src={product.modelList[0]?.thumbUrl} alt={product.fmyEngName}/>
                <ProductName>{product.fmyEngName}</ProductName>
            </StyledPaper>
        </Grid>
    )
}

export default ProductFamilyCard;