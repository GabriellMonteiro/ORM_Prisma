import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){

    const result = await prisma.modules.delete({
        where: ({
            id: "9d496674-0d42-4087-af8f-b36685bfad99"
        })
    })
}
main()