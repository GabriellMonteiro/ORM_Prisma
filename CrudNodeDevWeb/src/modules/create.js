import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "Curso do JS",
            description: "vamo Gremio",
        }
    })

    console.log(result);
}
main()