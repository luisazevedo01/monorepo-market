import { Grid, Typography } from "@mui/material";
import styled from "styled-components";


const StyledBannerImg = styled.img`
    border-radius: 20px;
    max-height: 200px;
    object-fit: cover;
`

const StyledProfileImg = styled.img`
    top: 220px;
    position: absolute;
    border-radius: 50%;
    object-fit: cover;
    max-height: 100px;
`

const AccountBanner = () => {
    return (
        <Grid container justifyContent={"center"} mt="16px">
            <StyledBannerImg
                width={"90%"}
                height={200}
                src={`/banner.jpeg?auto=format`}
                srcSet={`/banner.jpeg?dpr=2 2x`}
                alt="Profile picture"
                loading="lazy"
            />
            <Grid container flexDirection={'column'} alignItems={"center"} mt={5}>
                <StyledProfileImg
                    width={100}
                    height={100}
                    src={`/profile.jpeg?auto=format`}
                    srcSet={`/profile.jpeg?dpr=2 2x`}
                    alt="Profile picture"
                    loading="lazy"
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