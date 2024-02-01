import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import { blue } from "@mui/material/colors";

type TProductCardProps = {
    product: any;
    img?: string;
    title?: string;
    description?: string;
    price?: string;
    buyFn: (product: any) => void;
}

export const ProductCard = (props: TProductCardProps) => {
    return (

        <Card sx={{ width: 345, margin: '20px' }}>
            <Paper elevation={3}>
                <CardMedia
                    sx={{ objectFit: 'contain', height: '200px' }}
                    component="img"
                    alt={props.product.title}
                    image={props.product.image}
                />
                <CardContent>
                    <Grid container flexDirection="row" justifyContent={'space-between'}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.product.title}
                        </Typography>
                        <Typography gutterBottom color={blue[700]} fontWeight="550" variant="body1" component="div">
                            {props.product.price}€
                        </Typography>
                    </Grid>
                    {props.description && <Typography variant="body2" color="text.secondary">
                        {props.product.description}
                    </Typography>}
                    <Grid container justifyContent={'flex-end'}>
                        <Button color="success" size="small" onClick={() => props.buyFn(props.product)}>Comprar</Button>
                    </Grid>
                </CardContent>
            </Paper>
        </Card >
    )
}