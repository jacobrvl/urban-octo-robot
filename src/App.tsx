import {Grid} from "@mui/material";
import Header from "./components/Header.tsx";



function App() {
    return (
        <Grid container spacing={4} direction={"column"} alignItems="center">
            <Header/>
        </Grid>
    )
}

export default App
