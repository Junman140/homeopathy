import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedStudentData() {
  console.log('🌱 Seeding student data...')

  try {
    // Create a sample student
    const student = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@mocham.edu.ng',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+234-803-123-4567',
        program: 'Homeopathic Medicine',
        qualifications: 'High School Diploma',
        studentId: 'STU001',
        enrollmentStatus: 'active'
      }
    })

    console.log('✅ Created student:', student.name)

    // Create sample grades
    const grades = await Promise.all([
      prisma.studentGrade.create({
        data: {
          userId: student.id,
          courseName: 'Advanced Homeopathic Medicine',
          courseCode: 'AHM501',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          grade: 'A',
          score: 85,
          maxScore: 100,
          comments: 'Excellent performance in clinical applications'
        }
      }),
      prisma.studentGrade.create({
        data: {
          userId: student.id,
          courseName: 'Research Methodology',
          courseCode: 'RM502',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          grade: 'B+',
          score: 78,
          maxScore: 100,
          comments: 'Good understanding of research principles'
        }
      }),
      prisma.studentGrade.create({
        data: {
          userId: student.id,
          courseName: 'Anatomy and Physiology',
          courseCode: 'AP503',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          grade: 'A-',
          score: 88,
          maxScore: 100,
          comments: 'Strong grasp of human anatomy'
        }
      })
    ])

    console.log('✅ Created grades:', grades.length)

    // Create sample certificates
    const certificates = await Promise.all([
      prisma.studentCertificate.create({
        data: {
          userId: student.id,
          title: 'Homeopathic Medicine Certificate',
          description: 'Certificate of completion for Homeopathic Medicine program',
          certificateType: 'certificate',
          fileUrl: '/certificates/homeopathic-medicine-cert.pdf',
          issueDate: new Date('2024-12-15'),
          isActive: true
        }
      }),
      prisma.studentCertificate.create({
        data: {
          userId: student.id,
          title: 'Academic Transcript',
          description: 'Official academic transcript for all completed courses',
          certificateType: 'transcript',
          fileUrl: '/certificates/academic-transcript.pdf',
          issueDate: new Date('2024-12-15'),
          isActive: true
        }
      })
    ])

    console.log('✅ Created certificates:', certificates.length)

    // Create sample schedules
    const schedules = await Promise.all([
      prisma.studentSchedule.create({
        data: {
          userId: student.id,
          title: 'Advanced Homeopathic Medicine',
          description: 'Weekly lecture and practical sessions',
          courseCode: 'AHM501',
          courseName: 'Advanced Homeopathic Medicine',
          instructor: 'Dr. Sarah Adebayo',
          location: 'Room AH-101',
          startTime: '09:00',
          endTime: '11:00',
          dayOfWeek: 'Monday',
          scheduleType: 'class',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          isActive: true
        }
      }),
      prisma.studentSchedule.create({
        data: {
          userId: student.id,
          title: 'Advanced Homeopathic Medicine',
          description: 'Weekly lecture and practical sessions',
          courseCode: 'AHM501',
          courseName: 'Advanced Homeopathic Medicine',
          instructor: 'Dr. Sarah Adebayo',
          location: 'Room AH-101',
          startTime: '09:00',
          endTime: '11:00',
          dayOfWeek: 'Wednesday',
          scheduleType: 'class',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          isActive: true
        }
      }),
      prisma.studentSchedule.create({
        data: {
          userId: student.id,
          title: 'Research Methodology',
          description: 'Research methods and thesis preparation',
          courseCode: 'RM502',
          courseName: 'Research Methodology',
          instructor: 'Dr. Michael Okonkwo',
          location: 'Room RM-205',
          startTime: '14:00',
          endTime: '16:00',
          dayOfWeek: 'Tuesday',
          scheduleType: 'class',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          isActive: true
        }
      }),
      prisma.studentSchedule.create({
        data: {
          userId: student.id,
          title: 'Research Methodology',
          description: 'Research methods and thesis preparation',
          courseCode: 'RM502',
          courseName: 'Research Methodology',
          instructor: 'Dr. Michael Okonkwo',
          location: 'Room RM-205',
          startTime: '14:00',
          endTime: '16:00',
          dayOfWeek: 'Thursday',
          scheduleType: 'class',
          semester: 'Fall 2024',
          academicYear: '2024-2025',
          isActive: true
        }
      })
    ])

    console.log('✅ Created schedules:', schedules.length)

    console.log('🎉 Student data seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error during student data seeding:', error)
    throw error
  }
}

seedStudentData()
  .catch((e) => {
    console.error('❌ Error during student data seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
