import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.modules.findMany()
    console.log(result)

}
main()

