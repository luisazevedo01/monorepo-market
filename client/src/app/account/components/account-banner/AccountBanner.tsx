import { Grid, Typography } from "@mui/material";

const AccountBanner = () => {

    return (
        <Grid container justifyContent={"center"} mt={2}>
            <img
                width={"90%"}
                height={200}
                src={`/banner.jpeg?auto=format`}
                srcSet={`/banner.jpeg?dpr=2 2x`}
                alt="Profile picture"
                loading="lazy"
                style={{
                    borderRadius: "20px",
                    maxHeight: "200px",
                    objectFit: "cover"
                }}
            />
            <Grid container flexDirection={'column'} alignItems={"center"} mt={5}>
                <img
                    width={100}
                    height={100}
                    src={`/profile.jpeg?auto=format`}
                    srcSet={`/profile.jpeg?dpr=2 2x`}
                    alt="Profile picture"
                    loading="lazy"
                    style={{
                        top: "220px",
                        position: "absolute",
                        borderRadius: "50%",
                        objectFit: "cover",
                        maxHeight: "100px"
                    }}
                />
                <Typography variant="h6" mt={2} fontWeight="bold" >Luis Azevedo</Typography>
                <Typography variant="subtitle2" color="grey" >São Jorge, Açores, PT</Typography>
                <Grid container justifyContent={'center'} mt={4}>
                    <Grid container flexDirection={"column"} alignItems={'center'} width={100}>
                        <Typography variant="subtitle1" fontWeight="bold" >5 Orders</Typography>
                        <Typography variant="subtitle1" color="grey" >Products</Typography>
                    </Grid>
                    <Grid container flexDirection={"column"} alignItems={'center'} width={100}>
                        <Typography variant="subtitle1" fontWeight="bold" >2 Pending</Typography>
                        <Typography variant="subtitle1" color="grey" >Favorites</Typography>
                    </Grid>
                    <Grid container flexDirection={"column"} alignItems={'center'} width={100}>
                        <Typography variant="subtitle1" fontWeight="bold" >3</Typography>
                        <Typography variant="subtitle1" color="grey" >Settings</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AccountBanner;