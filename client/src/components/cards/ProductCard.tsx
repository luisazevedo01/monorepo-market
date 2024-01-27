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
    img: string;
    title: string;
    description?: string;
    price: string;
}

export const ProductCard = (props: TProductCardProps) => {
    return (

        <Card sx={{ width: 345, margin: '20px' }}>
            <Paper elevation={3}>
                <CardMedia
                    sx={{ objectFit: 'contain', height: '200px' }}
                    component="img"
                    alt={props.title}
                    image={props.img}
                />
                <CardContent>
                    <Grid container flexDirection="row" justifyContent={'space-between'}>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom color={blue[700]} fontWeight="550" variant="body1" component="div">
                            {props.price}€
                        </Typography>
                    </Grid>
                    {props.description && <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>}
                    <Grid container justifyContent={'flex-end'}>
                        <Button color="success" size="small">Comprar</Button>
                    </Grid>
                </CardContent>
                {/*                <CardActions>
                    <Button color="success" size="small">Comprar</Button>
                </CardActions> */}
            </Paper>
        </Card >
    )
}