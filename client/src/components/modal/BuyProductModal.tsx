import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';

interface BuyProductModalProps {
    product: any;
    open: boolean;
    handleClose: () => void;
}

function BuyProductModal({ open, handleClose, product }: BuyProductModalProps) {

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-center">{(product as { title: string })["title"]}</DialogTitle>
            <DialogContent>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                L
                            </Avatar>
                        }
                        title={product.owner?.name}
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Grid container justifyContent={'space-between'}>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon fontSize="large" />
                            </IconButton>
                            <IconButton onClick={handleClose}>
                                <AddShoppingCartIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                    </CardActions>
                </Card>
            </DialogContent>
        </Dialog>

    );
}

export default BuyProductModal
