import React, { useState } from "react";
import DonutChart from "@client/src/components/charts/DonutChart";
import { Box, Grid, Tab, Tabs } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const AccountTabs = () => {
    const [value, setValue] = useState('orders');

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <TabContext value={value}>
                <Box sx={{ width: '100%' }} mt={5}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                        centered
                    >
                        <Tab value="orders" label="Orders" />
                        <Tab value="favorited" label="Liked Products" />
                        <Tab value="payment" label="Payment" />
                        <Tab value="activity" label="Activity" />
                    </Tabs>
                </Box>
                <hr />
                <TabPanel value="orders">Orders Tab</TabPanel>
                <TabPanel value="payment">Payment Tab</TabPanel>
                <TabPanel value="favorited">Favorited Tab</TabPanel>
                <TabPanel value="activity">
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
                </TabPanel>
            </TabContext>
        </>
    )
}

export default AccountTabs;