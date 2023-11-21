import { useState } from "react";
import { Link } from "react-router-dom";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box, Typography } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";


type Props = {}

const Navbar  = (props: Props) => {
    // const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0rem" style={{color:"#488f31"}}> 
        {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
      <MonetizationOnIcon style={{ fontSize: '28px', color: '#488f31' }} />
        <Typography variant="h4" fontSize="16px" style={{color:"#488f31"}}>
          Expenses Tracker
        </Typography>
      </FlexBetween>

        {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: "#488f31", fontWeight:"bold"} }}>
        <Link to="/"onClick={() => setSelected("dashboard")}
        style={{
          color: selected === "dashboard" ? "inherit" : "#488f31",
            textDecoration: "inherit",
          }}
        >
            Dashboard 
            </Link>
        </Box>
        <Box sx={{ "&:hover": { color: "#488f31", fontWeight:"bold"} }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : "#488f31",
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
            </Box>
        </FlexBetween>






        </FlexBetween>
    );
}
export default Navbar;




//"#598C58" vert 

