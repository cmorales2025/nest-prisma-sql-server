const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log('Database connected successfully');
        
        // Crear un usuario de ejemplo
        const user = await prisma.user.create({
            data: {
                email: 'claudio@example.com',
                name: 'Test User',
            },
        });
        console.log('User created:', user);

        // Desconectar
        await prisma.$disconnect();
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

main();
