import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";


const SearchStyle = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.main, 1),
  },
  color: "white",
  marginLeft: 0,
  width: "100%",
  flexGrow: 1,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type Product = {
  img: string;
  title: string;
  description?: string;
  price: string;
};

type SearchProps = {
  products: Array<Product>;
  setProduct: React.Dispatch<React.SetStateAction<any>>;
};

export default function Search({ products, setProduct }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filteredProducts = products?.filter((value) =>
      value.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProduct(filteredProducts);
  }, [searchValue]);


  return (
    <SearchStyle>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </SearchStyle>
  );
}
