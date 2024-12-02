import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';


import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import logo from '../assets/image3x.png'
import { useNavigate } from 'react-router-dom';

const pages = [' Our Work', 'Our Projects', 'Knowledge Capital', 'About Us', 'Careers', 'Contact Us'];
const page = [
    { label: 'Our Work', path: 'ourwork' },
    { label: 'Our Projects', path: 'ourprojects' },
    // { label: 'Knowledge Capital', path: 'knowledgecapital' },
    { label: 'About Us', path: 'about' },
    { label: 'Careers', path: 'careers' },
    { label: 'Contact Us', path: 'contact' },

]

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate()


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
  

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" style={{ backgroundColor: 'white', padding: 5 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer',

                        }}

                        onClick={() => navigate('/')}
                    >

                        <img width={'150px'} src={logo} alt='' />

                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', display: 'flex', justifyContent: 'flex-end', } }}>
                        <IconButton
                            style={{ color: 'black' }}
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}>
                            {page.map((page) => (
                                <MenuItem key={page} onClick={() => {
                                    navigate(`/${page.path}`)

                                    handleCloseNavMenu()
                                }}>
                                    <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                                </MenuItem>
                            ))}

                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {page.map((page) => (
                            <Button
                                className='hover:scale-105 transform transition-all duration-300'
                                key={page}
                                onClick={() => navigate(`/${page.path}`)}
                                sx={{
                                    my: 2, color: 'black', display: 'block', ml: 1.5, font: 'bold', fontSize: 16, '&:hover': {
                                        color: '#ED1C24',
                                    },
                                }}
                            >
                                {page?.label}
                            </Button>
                        ))}

                    </Box>

                    <Box>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default Navbar