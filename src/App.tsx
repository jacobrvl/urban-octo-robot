import {Grid} from "@mui/material";
import Header from "./components/Header.tsx";
import ProductGrid from "./components/ProductGrid.tsx";


function App() {
    return (
        <Grid container spacing={4} direction={"column"} alignItems="center">
            <Header/>
            <ProductGrid/>
        </Grid>
    )
}

export default App
