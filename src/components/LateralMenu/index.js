import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid"; // Grid version 1
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import avatar from "@images/avatar_default.png";
import { Button } from "@mui/material";

const settings = ["Spanish", "English"];
const drawerWidth = 380;

const ResponsiveAppBar = (props) => {
  const { window } = props;
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={10} md={10}>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Settings Web
          </Typography>
          <Typography variant="span">LocalStorage</Typography>
        </Grid>
        <Grid
          item
          xs={2}
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            justifyContent: "center",
          }}
        >
          <CloseIcon
            fontSize="small"
            onClick={handleCloseUserMenu}
            sx={{
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>

      <Divider variant="middle" sx={{ marginTop: 5 }}>
        THEME
      </Divider>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        <Grid item xs={12} md={4}>
          <Button variant="contained">
            <LightModeIcon />
            <Typography variant="span">Light</Typography>
          </Button>
        </Grid>
        <Grid item xs={12} md={1}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button variant="outlined">
            <DarkModeIcon />
            <Typography variant="span">Dark</Typography>
          </Button>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ marginTop: 5 }}>
        LANGUAGE
      </Divider>
      <List>
        {settings.map((setting) => (
          <ListItem key={setting} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={setting} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" sx={{ marginTop: 5 }}>
        FOLLOW ME
      </Divider>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Grid item xs={12} md={4}>
          <Typography
            component="a"
            href="https://www.linkedin.com/in/jairo-felipe-nieto-ruiz-2570691a3/"
            color="primary"
          >
            <LinkedInIcon
              sx={{
                cursor: "pointer",
              }}
              fontSize="large"
            />
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component="a" href="/" color="primary">
            <InstagramIcon
              sx={{
                cursor: "pointer",
              }}
              fontSize="large"
            />
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={avatar} />
          </IconButton>
        </Tooltip>
        <Drawer
          container={container}
          variant="temporary"
          anchor={"right"}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          elevation={13}
          hideBackdrop={true}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "saturate(200%) blur(1.875rem)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default ResponsiveAppBar;
