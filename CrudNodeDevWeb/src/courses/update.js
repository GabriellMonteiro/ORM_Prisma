import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.courses.update({
        where: {
            id: "23102205-2869-42af-b5ef-4006bb9a3281"
        },
        data: {
            name: 'Curso de Prisma.js com Fastify',
            duration: 200,
            description: "Vamo Gremio"
        }
    })


    console.log(result)

}

main()