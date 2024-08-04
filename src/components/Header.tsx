import styled from "@emotion/styled";
import {Grid} from "@mui/material";
import samsungLogo from "../assets/samsung_white.png";
import StyledRainbowHeader from "./RainbowHeader.tsx";


const StyledImage = styled.img`
    height: 100px;
    position: absolute;
    top: 5px;
    transform: translateX(-50%);
    z-index: 2;
`;


const StyledLogoGrid = styled(Grid)`
    height: 110px;
`;

function Header() {
    return (
        <>
            <StyledRainbowHeader />
            <StyledLogoGrid item>
                <StyledImage src={samsungLogo} alt={"samsung logo"}/>
            </StyledLogoGrid>
        </>
    )
}


export default Header;