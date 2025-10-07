import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding test students...')

  // Create test student accounts
  const testStudents = [
    {
      id: 'student-1',
      email: 'john.doe@student.mocham.edu',
      name: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      phone: '+2348021234567',
      program: 'Masters in Homeopathic Medicine',
      qualifications: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
      studentId: 'MOCHAM2024001',
      enrollmentStatus: 'Enrolled',
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'student-2',
      email: 'jane.smith@student.mocham.edu',
      name: 'Jane Smith',
      firstName: 'Jane',
      lastName: 'Smith',
      phone: '+2348021234568',
      program: 'PhD in Homeopathic Medicine',
      qualifications: 'Master of Science in Alternative Medicine',
      studentId: 'MOCHAM2024002',
      enrollmentStatus: 'Enrolled',
      emailVerified: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]

  for (const student of testStudents) {
    await prisma.user.upsert({
      where: { email: student.email },
      update: student,
      create: student,
    })
    console.log(`✅ Created/Updated student: ${student.name} (${student.studentId})`)
  }

  console.log('🎉 Test students seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding students:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
