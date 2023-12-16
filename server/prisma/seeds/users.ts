import { PrismaClient } from "@prisma/client";

const USERS = [
    {
        name: 'Luis',
        email: 'luismiguelgomes2@fmail.com',
        userType: 'CUSTOMER',
        createdAt: new Date(),
    },
    {
        name: 'Miguel',
        email: 'miguel2@fmail.com',
        userType: 'SELLER',
        createdAt: new Date(),
    },
    {
        name: 'Hugo',
        email: 'hugobarcelos3@fmail.com',
        userType: 'CUSTOMER',
        createdAt: new Date(),
    },
];

async function user_seeds(prisma: PrismaClient) {
    await prisma.user?.deleteMany();

    console.log('\n // USERS // \n')
    const promises = USERS.map(async (user) => {
        const newUser = await prisma.user.create({
            data: {
                ...user
            }
        })
        console.log(newUser)
    })

    await Promise.all(promises)
}

export default user_seeds;