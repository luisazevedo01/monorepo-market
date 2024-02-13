import DonutChart from "@client/src/components/charts/DonutChart";
import { Grid, styled, Typography } from "@mui/material"

const AccountTabs = () => {
    return (
        <>
            <Grid container justifyContent={'space-evenly'} mt={8} mb={2}>
                <Typography variant="subtitle1" fontWeight="bold" >Orders</Typography>
                <Typography variant="subtitle1" color="grey" >Payment</Typography>
                <Typography variant="subtitle1" color="grey" >Cart</Typography>
                <Typography variant="subtitle1" color="grey" >Activity</Typography>
            </Grid>
            <hr />
            <Grid container justifyContent={'space-evenly'}>
                <DonutChart
                    width={300}
                    height={300}
                    data={[
                        { name: "Alface", value: 36 },
                        { name: "Tomatos", value: 30 },
                        { name: "Cebola", value: 14 },
                        { name: "Pepino", value: 20 },
                    ]}
                />
                <DonutChart
                    width={300}
                    height={300}
                    data={[
                        { name: "Alface", value: 36 },
                        { name: "Tomatos", value: 10 },
                        { name: "Cebola", value: 24 },
                        { name: "Pepino", value: 30 },
                    ]}
                />
                <DonutChart
                    width={300}
                    height={300}
                    data={[
                        { name: "Alface", value: 46 },
                        { name: "Tomatos", value: 20 },
                        { name: "Cebola", value: 10 },
                        { name: "Pepino", value: 24 },
                    ]}
                />
            </Grid>
        </>
    )
}

export default AccountTabs;