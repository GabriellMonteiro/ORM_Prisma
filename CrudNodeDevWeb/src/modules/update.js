import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const result = await prisma.modules.update({
        where: ({
            name:"Curso do JS"
        }),
        data:({
            name: "Teste de fidelidade"
        })
    })

    console.log(result)
}
main()