import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedCourses() {
  console.log('🌱 Seeding courses...')

  try {
    // Check if courses already exist
    const existingCourses = await prisma.course.findFirst()

    if (existingCourses) {
      console.log('ℹ️ Courses already exist. Skipping creation.')
      return
    }

    console.log('📚 Creating courses...')
    const courses = await Promise.all([
      prisma.course.create({
        data: {
          title: 'Introduction to Homeopathic Medicine',
          code: 'HOM101',
          description: 'Fundamental principles and philosophy of homeopathic medicine, including the law of similars and potentization.',
          credits: 3,
          duration: '16 weeks',
          level: 'beginner',
          category: 'core',
          instructor: 'Dr. Sarah Adebayo',
          prerequisites: [],
          isActive: true,
          maxStudents: 30,
          currentEnrollment: 0,
          semester: 'fall',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Materia Medica I',
          code: 'MM101',
          description: 'Study of homeopathic remedies, their sources, preparation, and therapeutic applications.',
          credits: 4,
          duration: '16 weeks',
          level: 'beginner',
          category: 'core',
          instructor: 'Dr. Michael Okonkwo',
          prerequisites: ['HOM101'],
          isActive: true,
          maxStudents: 25,
          currentEnrollment: 0,
          semester: 'fall',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Anatomy and Physiology',
          code: 'AP101',
          description: 'Human anatomy and physiological processes essential for understanding disease and treatment.',
          credits: 4,
          duration: '16 weeks',
          level: 'beginner',
          category: 'core',
          instructor: 'Dr. Fatima Ibrahim',
          prerequisites: [],
          isActive: true,
          maxStudents: 35,
          currentEnrollment: 0,
          semester: 'fall',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Homeopathic Pharmacy',
          code: 'HP201',
          description: 'Preparation, storage, and dispensing of homeopathic medicines and remedies.',
          credits: 3,
          duration: '16 weeks',
          level: 'intermediate',
          category: 'core',
          instructor: 'Dr. Sarah Adebayo',
          prerequisites: ['HOM101', 'MM101'],
          isActive: true,
          maxStudents: 20,
          currentEnrollment: 0,
          semester: 'spring',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Clinical Practice I',
          code: 'CP201',
          description: 'Hands-on clinical training in homeopathic case-taking and remedy selection.',
          credits: 5,
          duration: '16 weeks',
          level: 'intermediate',
          category: 'practical',
          instructor: 'Dr. Michael Okonkwo',
          prerequisites: ['HOM101', 'MM101', 'AP101'],
          isActive: true,
          maxStudents: 15,
          currentEnrollment: 0,
          semester: 'spring',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Herbal Medicine Fundamentals',
          code: 'HM301',
          description: 'Introduction to traditional herbal medicine and its integration with homeopathy.',
          credits: 3,
          duration: '16 weeks',
          level: 'intermediate',
          category: 'elective',
          instructor: 'Dr. Fatima Ibrahim',
          prerequisites: ['AP101'],
          isActive: true,
          maxStudents: 25,
          currentEnrollment: 0,
          semester: 'fall',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Advanced Materia Medica',
          code: 'MM301',
          description: 'Advanced study of complex homeopathic remedies and their clinical applications.',
          credits: 4,
          duration: '16 weeks',
          level: 'advanced',
          category: 'core',
          instructor: 'Dr. Sarah Adebayo',
          prerequisites: ['MM101', 'CP201'],
          isActive: true,
          maxStudents: 20,
          currentEnrollment: 0,
          semester: 'fall',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Clinical Practice II',
          code: 'CP301',
          description: 'Advanced clinical training with supervised patient consultations.',
          credits: 6,
          duration: '16 weeks',
          level: 'advanced',
          category: 'practical',
          instructor: 'Dr. Michael Okonkwo',
          prerequisites: ['CP201', 'HP201'],
          isActive: true,
          maxStudents: 12,
          currentEnrollment: 0,
          semester: 'spring',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Research Methods in Alternative Medicine',
          code: 'RM301',
          description: 'Introduction to research methodologies and evidence-based practice in alternative medicine.',
          credits: 3,
          duration: '16 weeks',
          level: 'advanced',
          category: 'elective',
          instructor: 'Dr. Fatima Ibrahim',
          prerequisites: ['AP101'],
          isActive: true,
          maxStudents: 20,
          currentEnrollment: 0,
          semester: 'spring',
          academicYear: '2024-2025'
        }
      }),
      prisma.course.create({
        data: {
          title: 'Professional Ethics and Practice',
          code: 'PE401',
          description: 'Ethical considerations, legal aspects, and professional standards in homeopathic practice.',
          credits: 2,
          duration: '8 weeks',
          level: 'advanced',
          category: 'core',
          instructor: 'Dr. Sarah Adebayo',
          prerequisites: ['CP301'],
          isActive: true,
          maxStudents: 30,
          currentEnrollment: 0,
          semester: 'summer',
          academicYear: '2024-2025'
        }
      })
    ])

    console.log('✅ Created courses:', courses.length)

    // Create some sample course enrollments for the test student
    const testStudent = await prisma.user.findFirst({
      where: { email: 'john.doe@example.com' }
    })

    if (testStudent) {
      console.log('📝 Creating sample enrollments...')
      const enrollments = await Promise.all([
        prisma.courseEnrollment.create({
          data: {
            userId: testStudent.id,
            courseId: courses[0].id, // HOM101
            status: 'active'
          }
        }),
        prisma.courseEnrollment.create({
          data: {
            userId: testStudent.id,
            courseId: courses[1].id, // MM101
            status: 'active'
          }
        }),
        prisma.courseEnrollment.create({
          data: {
            userId: testStudent.id,
            courseId: courses[2].id, // AP101
            status: 'completed',
            finalGrade: 'A',
            completedAt: new Date()
          }
        })
      ])
      console.log('✅ Created enrollments:', enrollments.length)
    }

    console.log('🎉 Course seeding completed successfully!')
  } catch (e) {
    console.error('❌ Error during course seeding:', e)
    throw e
  } finally {
    await prisma.$disconnect()
  }
}

seedCourses()
  .catch((e) => {
    console.error('❌ Error during course seeding:', e)
    process.exit(1)
  })
