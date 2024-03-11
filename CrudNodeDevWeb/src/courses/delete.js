import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.delete({
        where: {
            id: "8edd5c21-1df7-4209-a590-dfcbf61d0506"
        },
    })

    console.log(result)
}

main()