import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function checkAdminUsers() {
  try {
    console.log('Checking admin users in database...')
    
    const adminUsers = await prisma.adminUser.findMany()
    
    console.log(`Found ${adminUsers.length} admin users:`)
    adminUsers.forEach(user => {
      console.log(`- Email: ${user.email}`)
      console.log(`  Name: ${user.name}`)
      console.log(`  Active: ${user.isActive}`)
      console.log(`  ID: ${user.id}`)
      console.log('')
    })
    
    // Also check if the specific email exists
    const specificUser = await prisma.adminUser.findUnique({
      where: { email: 'godswillitina@gmail.com' }
    })
    
    if (specificUser) {
      console.log('✅ Admin user godswillitina@gmail.com exists and is active:', specificUser.isActive)
    } else {
      console.log('❌ Admin user godswillitina@gmail.com does not exist')
    }
    
  } catch (error) {
    console.error('Error checking admin users:', error)
  } finally {
    await prisma.$disconnect()
  }
}

checkAdminUsers()
