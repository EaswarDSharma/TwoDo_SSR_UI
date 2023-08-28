import CssBaseline from "@material-ui/core/CssBaseline";
import { Card, Paper, Box, Divider,Button } from "@material-ui/core";
import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

 const Home = () => {
 
  return (
    <div>
      <Box>
        
                <CssBaseline />
              <div style={{ display: 'flex', alignItems: 'center' }}>
        <Divider variant="middle" /> 
      </div>
          <Card
            elevation={5}
            style={{
              display: "flex",
              padding: 100,
              height: "450px ",
              alignItems: "center",
              width: "700px  ",
              margin: "70px auto ",
              borderRadius: "20px",
              background: "#fffde7",
            }}
          >
            <Paper
              style={{
                padding: 40,
                height: "150px ",
                width: "200px  ",
                margin: "60px  auto ",
                borderRadius: "20px",
                background: "#fafafa",
              }}
            >
              <Button
                variant="outlined"
        startIcon={<AccountCircleIcon />}
        sx={{
          background: "#ffffff",
          margin: "10px 10px",
        }}
        href="/api/auth/google"
      >
        oauth
      </Button>
            </Paper>
            <Divider orientation="vertical" variant="middle" />
            <Paper
              style={{
                padding: 40,
                height: "150px ",
                width: "200px  ",
                margin: "60px auto ",
                borderRadius: "20px",
                background: "#fafafa",
              }}
            >
              <Button
                variant="outlined"
        startIcon={<AccountCircleIcon />}
        sx={{
          background: "#ffffff",
          borderRadius: "20px",
          margin: "1px 10px",
        }}
         href="/api/auth/google"

      > 
        oauth
      </Button>
            </Paper>
            <CssBaseline />
          </Card> 
      </Box>
    </div>
  );
}

export default {
  component: Home
};