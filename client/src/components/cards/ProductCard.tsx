import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type TProductCardProps = {
    img: string;
    title: string;
    description?: string;
    price: string;
}

export const ProductCard = (props: TProductCardProps) => {
    return (
        <Card sx={{ width: 345, margin: '20px' }}>
            <CardMedia
                sx={{ objectFit: 'contain', height: '200px' }}
                component="img"
                alt={props.title}
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    Preço: {props.price}€
                </Typography>
                {props.description && <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>}
            </CardContent>
            <CardActions>
                <Button color="success" size="small">Comprar</Button>
            </CardActions>
        </Card>
    )
}