import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BlockIcon from "@mui/icons-material/Block";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const UserDetail = () => {
  return (
    <Box display="flex">
      {/* Left Panel */}
      <Box flex={1} p={2} component={Paper} mr={2} className="bg-red-500">
        <Typography variant="h6" gutterBottom>
          User Information
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          mb={2}
          className="bg-gray-100 rounded-lg p-4"
        >
          <Avatar
            src="https://i.pravatar.cc/150?img=3"
            alt="Cameron Williamson"
            sx={{ width: 56, height: 56 }}
          />
          <Box ml={2}>
            <Typography variant="body1">Cameron Williamson</Typography>
            <Typography variant="body2" color="textSecondary">
              olaoluwaabijo@gmail.com
            </Typography>
            <Typography variant="body2" color="primary">
              NPID-12338093
            </Typography>
          </Box>
        </Box>
        {/* <Divider /> */}
        <List className="bg-gray-100 rounded-lg p-4">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              primary="About"
              secondary="Click to see their information"
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText
              primary="Wallet & Transactions"
              secondary="Click to see their transaction details"
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logs and activities"
              secondary="Click to see track their activities"
            />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BlockIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Ban User" secondary="Click to ban user" />
          </ListItem>
        </List>
      </Box>

      {/* Right Panel */}
      <Box flex={2} p={2} component={Paper}>
        <Typography variant="h6" gutterBottom>
          Details
        </Typography>
        <Box mb={2} className="bg-gray-100 rounded-lg p-6">
          <Typography
            variant="h6"
            gutterBottom
            className="bg-white rounded-lg p-2 "
          >
            About User
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            className="bg-gray-200 p-3 rounded-lg"
          >
            Personal Information
          </Typography>
          <Box mb={1} className="mt-4">
            <Typography variant="body2" color="textSecondary">
              Full Name
            </Typography>
            <Typography variant="body1">Cameron Williamson</Typography>
          </Box>
          <Box mb={1}>
            <Typography variant="body2" color="textSecondary">
              E-mail
            </Typography>
            <Typography variant="body1">olaoluwaabijo@gmail.com</Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                NPID
              </Typography>
              <Typography variant="body1">123456790</Typography>
            </Box>
            <Tooltip title="Copy NPID">
              <IconButton>
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* <Divider /> */}
          <Box mt={2}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className="bg-gray-200 p-3 rounded-lg"
            >
              Account Information
            </Typography>
            <Box mb={1} className="mt-4">
              <Typography variant="body2" color="textSecondary">
                Date created
              </Typography>
              <Typography variant="body1">23rd March 2023</Typography>
            </Box>
            <Box mb={1}>
              <Typography variant="body2" color="textSecondary">
                Time
              </Typography>
              <Typography variant="body1">09:12 AM</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2" color="textSecondary">
                Successful Transactions
              </Typography>
              <Typography variant="body1" ml={2}>
                12
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="body2" color="textSecondary">
                Unsuccessful Transactions
              </Typography>
              <Typography variant="body1" ml={2}>
                2
              </Typography>
            </Box>
            <Typography
              variant="body1"
              ml={2}
              className="bg-gray-200 p-2 rounded-lg"
            >
              KYC
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetail;
