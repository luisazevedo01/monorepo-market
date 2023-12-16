import { PrismaClient } from "@prisma/client"

const PRODUCTS = [
    {
        image: '/images/tomatoes.png',
        title: "Tomate",
        description: "Os melhores tomatos da ilha!!",
        price: "1.30",
        ownerId: 1,
        stock: 1
    },
    {
        image: '/images/alface.jpeg',
        title: "Alface",
        price: "1.30",
        ownerId: 1,
    },
    {
        image: '/images/orange.png',
        title: "Laranja",
        price: "1.30",
        ownerId: 1,
    },
    {
        image: '/images/pepino.png',
        title: "Pepino",
        price: "1.30",
        ownerId: 1,
    },
    {
        image: '/images/cebola.jpeg',
        title: "Cebola",
        price: "1.30",
        ownerId: 1,
    },
]

async function product_seeds(prisma: PrismaClient) {
    await prisma.product?.deleteMany();

    console.log('\n // PRODUCTS // \n')
    const promises = PRODUCTS.map(async (product) => {
        const newProduct = await prisma.product.create({
            data: {
                ...product
            }
        })
        console.log(newProduct)
    })

    await Promise.all(promises)
}

export default product_seeds;