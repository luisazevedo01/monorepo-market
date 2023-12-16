import { PrismaClient } from '@prisma/client';
import product_seeds from './seeds/products';
import user_seeds from './seeds/users';
const prisma = new PrismaClient();

async function main() {

    await user_seeds(prisma);

    await product_seeds(prisma);
}

main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })