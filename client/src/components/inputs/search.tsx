import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { set } from 'mongoose';

const SearchStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '8rem',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

type Product = {
    img: string;
    title: string;
    description?: string;
    price: string;
}

type SearchProps = {
    products: Array<Product>;
    setProduct: React.Dispatch<React.SetStateAction<any>>;
}
  
export default function Search({products, setProduct}: SearchProps) {

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const filteredProducts = products.filter(value => value.title.toLowerCase().includes(searchValue.toLowerCase()));
        setProduct(filteredProducts);
    }, [searchValue]);

  return (
      <Grid container justifyContent='center'>
            <SearchStyle>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => setSearchValue(e.target.value)}
                />
            </SearchStyle>
      </Grid>
  );
}