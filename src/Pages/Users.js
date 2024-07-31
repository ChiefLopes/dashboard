import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  Typography,
  Box,
  Avatar,
  IconButton,
  Input,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExportIcon from "@mui/icons-material/SaveAlt";
import SendMessageIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const usersData = [
  {
    id: 1,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  {
    id: 2,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  {
    id: 3,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  {
    id: 4,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  {
    id: 5,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  {
    id: 6,
    name: "Jerry Wilson Aduragba",
    email: "jerrywilson@gmail.com",
    npid: "NPID-2738728",
    dateJoined: "21st March, 2023",
  },
  // ... (other user data)
];

const UserTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuClick = (event, userId) => {
    setAnchorEl(event.currentTarget);
    setSelectedUserId(userId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewUser = () => {
    handleMenuClose();
    if (selectedUserId !== null) {
      navigate(`/user/${selectedUserId}`);
    }
  };

  const handleRowSelection = (event, userId) => {
    if (event.target.checked) {
      setSelectedRows((prev) => [...prev, userId]);
    } else {
      setSelectedRows((prev) => prev.filter((id) => id !== userId));
    }
  };

  return (
    <div>
      <Paper>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Registered Users (20)" />
          <Tab label="Waitlist Users (24)" />
          <Tab label="Banned Users (4)" />
        </Tabs>
        <Box p={2}>
         
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            p={2} // Added padding for spacing
          >
            <Input
              variant="outlined"
              placeholder="Search firstname"
              className="w-[20rem]"
              sx={{
                borderColor: "black",
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 1,
                color: "black",
                backgroundColor: "transparent",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
                "& input::placeholder": {
                  color: "black",
                },
              }}
            />
            <Box display="flex" className="space-x-4">
              <Button
                variant="outlined"
                endIcon={<FaChevronDown />}
                sx={{
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "transparent",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Column Filter
              </Button>
              <Button
                variant="outlined"
                
                endIcon={<ExportIcon />}
                sx={{
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "transparent",
                  "&:hover": {
                    borderColor: "black",
                    backgroundColor: "transparent",
                  },
                }}
              >
                Export Data as CSV
              </Button>
              <Button
                variant="outlined"
                startIcon={<SendMessageIcon />}
                sx={{
                  borderColor: "",
                  color: "white",
                  backgroundColor: "blue",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            <Table aria-label="user table">
              <TableHead>
                <TableRow className="bg-gray-100">
                  <TableCell padding="checkbox">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell>Names</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>NPID</TableCell>
                  <TableCell>Date Joined</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell padding="checkbox">
                      <input
                        type="checkbox"
                        onChange={(e) => handleRowSelection(e, user.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Avatar
                          alt={user.name}
                          src={`https://i.pravatar.cc/150?img=${user.id}`}
                        />
                        <Box ml={2}>
                          <Typography variant="body2">{user.name}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.npid}</TableCell>
                    <TableCell>{user.dateJoined}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={(event) => handleMenuClick(event, user.id)}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        <MenuItem onClick={handleViewUser}>View</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Footer with selection info and pagination */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Typography variant="body2">
              {selectedRows.length} of {usersData.length} rows selected
            </Typography>
            <Box>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderColor: "black", color: "black" }}
                style={{ marginRight: 8 }}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderColor: "black", color: "black" }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default UserTable;
