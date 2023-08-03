"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { UiContext } from '@/context';
import { signOut } from 'next-auth/react';
import { Badge, Chip } from '@mui/material';

const options = [{ label: 'Profile', action: '' }, { label: 'Account', action: '' }, { label: 'Dashboard', action: 'Open Dashboard' }, { label: 'Logout', action: 'On Logout' }];

interface Props {
  imgUrl: string;
  name: string;
  level: number;
}

function ResponsiveAppBar({ imgUrl, name, level }: Props) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const { toggleDashboardMenu } = React.useContext(UiContext);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (action: string) => {
    setAnchorElUser(null);
    switch (action) {
      case 'Open Dashboard':
        toggleDashboardMenu()
        return
      case 'On Logout':
        signOut()
        return
    }

  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open options">
        <Badge
          overlap="circular"
          color="secondary"
          className="on-entrance"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={`lvl ${level}`}
        >
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={`${name}'s profile picture`} src={imgUrl} />
          </IconButton>
        </Badge>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {options.map(({ label, action }) => (
          <MenuItem key={label} onClick={() => handleCloseUserMenu(action)}>
            <Typography textAlign="center">{label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default ResponsiveAppBar;