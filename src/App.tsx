import samsungLogo from "./assets/samsung_white.png";
import styled from "@emotion/styled";
import {Grid} from "@mui/material";

const StyledImage = styled.img`
    height: 100px;
    position: absolute;
    top: 5px;
    transform: translateX(-50%);
`;


const StyledLogoGrid = styled(Grid)`
    height: 110px;
`;

function App() {


    return (
        <Grid container spacing={4} direction={"column"} alignItems="center">
            <StyledLogoGrid item>
                <StyledImage src={samsungLogo} alt={"samsung logo"}/>
            </StyledLogoGrid>
        </Grid>
    )
}

export default App
