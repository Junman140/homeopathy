import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create Programs
  const programs = await Promise.all([
    prisma.program.create({
      data: {
        title: 'Bachelor of Medicine',
        description: '6-year comprehensive medical degree focusing on alternative and integrative medicine with extensive clinical training.',
        duration: '6 Years',
        type: 'degree',
        level: 'undergraduate',
        capacity: 50,
        isAccredited: true,
        features: [
          'NUC Accredited Program',
          '2 Years Clinical Rotations',
          'Expert Faculty'
        ],
        icon: 'GraduationCap',
        slug: 'bachelor-of-medicine'
      }
    }),
    prisma.program.create({
      data: {
        title: 'Homeopathy Diploma',
        description: '3-year professional diploma program providing comprehensive training in homeopathic medicine and practice management.',
        duration: '3 Years',
        type: 'diploma',
        level: 'professional',
        capacity: 30,
        isAccredited: true,
        features: [
          '1000+ Clinical Hours',
          'Professional Certification',
          'Practice Management'
        ],
        icon: 'Stethoscope',
        slug: 'homeopathy-diploma'
      }
    }),
    prisma.program.create({
      data: {
        title: 'Naturopathy Certificate',
        description: '2-year certification program covering natural healing methods, herbal medicine, and lifestyle counseling.',
        duration: '2 Years',
        type: 'certificate',
        level: 'professional',
        capacity: 25,
        isAccredited: true,
        features: [
          'Herbal Medicine Focus',
          'Lifestyle Counseling',
          'Natural Healing Methods'
        ],
        icon: 'BookOpen',
        slug: 'naturopathy-certificate'
      }
    })
  ])

  console.log('✅ Programs created:', programs.length)

  // Create Services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: 'Homeopathic Medicine',
        description: 'Natural healing approach using highly diluted substances to stimulate the body\'s healing response.',
        price: 15000,
        duration: '60 minutes',
        features: [
          'Chronic disease management',
          'Acute illness treatment',
          'Mental and emotional health',
          'Constitutional remedies'
        ],
        icon: 'Heart',
        category: 'homeopathy',
        slug: 'homeopathic-medicine'
      }
    }),
    prisma.service.create({
      data: {
        name: 'Integrative Medicine',
        description: 'Combination of conventional and alternative approaches for optimal health outcomes.',
        price: 20000,
        duration: '90 minutes',
        features: [
          'Collaborative care with conventional doctors',
          'Evidence-based alternative treatments',
          'Comprehensive health assessments',
          'Personalized treatment plans'
        ],
        icon: 'Stethoscope',
        category: 'integrative',
        slug: 'integrative-medicine'
      }
    }),
    prisma.service.create({
      data: {
        name: 'Herbal Medicine',
        description: 'Traditional plant-based remedies combined with modern scientific understanding.',
        price: 12000,
        duration: '45 minutes',
        features: [
          'Custom herbal formulations',
          'Medicinal plant consultations',
          'Phytotherapy treatments',
          'Quality-assured herbal products'
        ],
        icon: 'Users',
        category: 'herbal',
        slug: 'herbal-medicine'
      }
    })
  ])

  console.log('✅ Services created:', services.length)

  // Create Doctors
  const doctors = await Promise.all([
    prisma.doctor.create({
      data: {
        name: 'Dr. Sarah Adebayo',
        title: 'Chief Medical Officer',
        specialization: 'Homeopathic Medicine',
        bio: 'MD, Homeopathy (Germany), with 25+ years of experience in alternative medicine practice and education.',
        education: 'MD, Homeopathy (Germany)',
        experience: 25,
        rating: 4.9,
        reviewCount: 127,
        slug: 'dr-sarah-adebayo'
      }
    }),
    prisma.doctor.create({
      data: {
        name: 'Dr. Michael Okonkwo',
        title: 'Senior Homeopathic Physician',
        specialization: 'Naturopathy',
        bio: 'PhD in Naturopathy, specializing in chronic disease management and integrative approaches to healthcare.',
        education: 'PhD in Naturopathy',
        experience: 18,
        rating: 4.8,
        reviewCount: 89,
        slug: 'dr-michael-okonkwo'
      }
    }),
    prisma.doctor.create({
      data: {
        name: 'Dr. Fatima Ibrahim',
        title: 'Herbal Medicine Specialist',
        specialization: 'Herbal Medicine',
        bio: 'MD, Herbal Medicine (India), with expertise in traditional Nigerian herbs and their therapeutic applications.',
        education: 'MD, Herbal Medicine (India)',
        experience: 15,
        rating: 4.9,
        reviewCount: 95,
        slug: 'dr-fatima-ibrahim'
      }
    })
  ])

  console.log('✅ Doctors created:', doctors.length)

  // Create News Articles
  const news = await Promise.all([
    prisma.news.create({
      data: {
        title: 'How Traditional Medicine Enhances Modern Healthcare Education',
        content: 'Traditional medicine has been an integral part of healthcare for centuries, and its integration into modern medical education is proving to be transformative...',
        excerpt: 'Exploring the benefits of incorporating traditional medicine practices into modern healthcare education.',
        category: 'education',
        author: 'Dr. Sarah Adebayo',
        isPublished: true,
        publishedAt: new Date('2025-09-19'),
        slug: 'traditional-medicine-modern-healthcare-education'
      }
    }),
    prisma.news.create({
      data: {
        title: 'New Study: Homeopathic Remedies Show Promise in Chronic Disease Management',
        content: 'A recent study conducted by our research team has shown promising results in the use of homeopathic remedies for chronic disease management...',
        excerpt: 'Latest research findings on the effectiveness of homeopathic treatments for chronic conditions.',
        category: 'research',
        author: 'Dr. Michael Okonkwo',
        isPublished: true,
        publishedAt: new Date('2025-09-18'),
        slug: 'homeopathic-remedies-chronic-disease-management'
      }
    }),
    prisma.news.create({
      data: {
        title: 'How Much Can You Drink? The Science of Herbal Medicine Dosages',
        content: 'Understanding proper dosages in herbal medicine is crucial for both safety and effectiveness. This article explores the scientific principles behind herbal medicine dosing...',
        excerpt: 'A comprehensive guide to understanding herbal medicine dosages and their scientific basis.',
        category: 'research',
        author: 'Dr. Fatima Ibrahim',
        isPublished: true,
        publishedAt: new Date('2025-07-01'),
        slug: 'herbal-medicine-dosages-science'
      }
    }),
    prisma.news.create({
      data: {
        title: 'I\'m an Alternative Medicine Practitioner. Here\'s How to Choose Natural vs. Conventional Treatment',
        content: 'As an alternative medicine practitioner with over two decades of experience, I often get asked about when to choose natural treatments over conventional ones...',
        excerpt: 'Expert insights on making informed decisions between natural and conventional medical treatments.',
        category: 'research',
        author: 'Dr. Sarah Adebayo',
        isPublished: true,
        publishedAt: new Date('2025-07-17'),
        slug: 'choosing-natural-vs-conventional-treatment'
      }
    }),
    prisma.news.create({
      data: {
        title: 'The Most Effective Herbal Remedies Don\'t Reach Enough Patients Yet',
        content: 'Despite the proven effectiveness of many herbal remedies, there are still significant barriers preventing patients from accessing these treatments...',
        excerpt: 'Examining the challenges in making effective herbal remedies more accessible to patients.',
        category: 'research',
        author: 'Dr. Fatima Ibrahim',
        isPublished: true,
        publishedAt: new Date('2025-07-03'),
        slug: 'effective-herbal-remedies-accessibility'
      }
    }),
    prisma.news.create({
      data: {
        title: 'This is How AI Can Help Us Make New Herbal Medicines Faster',
        content: 'Artificial Intelligence is revolutionizing the field of herbal medicine research, helping scientists identify new compounds and formulations more efficiently...',
        excerpt: 'Exploring the role of AI in accelerating herbal medicine research and development.',
        category: 'research',
        author: 'Dr. Michael Okonkwo',
        isPublished: true,
        publishedAt: new Date('2025-06-26'),
        slug: 'ai-herbal-medicine-research'
      }
    })
  ])

  console.log('✅ News articles created:', news.length)

  // Create Testimonials
  const testimonials = await Promise.all([
    prisma.testimonial.create({
      data: {
        name: 'Adunni Olatunji',
        content: 'The homeopathic treatment I received here completely transformed my chronic migraines. The doctors took time to understand my condition and provided personalized care.',
        rating: 5,
        service: 'Homeopathy Patient'
      }
    }),
    prisma.testimonial.create({
      data: {
        name: 'Emeka Kalu',
        content: 'The integrative approach here combines the best of conventional and alternative medicine. My diabetes management has improved significantly.',
        rating: 5,
        service: 'Integrative Medicine Patient'
      }
    }),
    prisma.testimonial.create({
      data: {
        name: 'Fatima Bello',
        content: 'The herbal medicine consultation was thorough and educational. The custom formulations have helped with my digestive issues.',
        rating: 5,
        service: 'Herbal Medicine Patient'
      }
    })
  ])

  console.log('✅ Testimonials created:', testimonials.length)

  // Create History Events
  const historyEvents = await Promise.all([
    prisma.historyEvent.create({
      data: {
        year: 2009,
        title: 'Foundation',
        description: 'Dr. Sarah Adebayo founded the school with a vision to bridge traditional healing wisdom with modern healthcare practices. Started with 12 students in a small training center.',
        icon: 'Users',
        color: 'ucsf-blue',
        stats: ['12 Students', '3 Faculty Members'],
        order: 1
      }
    }),
    prisma.historyEvent.create({
      data: {
        year: 2012,
        title: 'NUC Accreditation',
        description: 'Received official recognition from the National Universities Commission for our medical degree program, marking a significant milestone in our institutional development.',
        icon: 'Award',
        color: 'medical-green',
        stats: ['NUC Accredited', '150+ Students'],
        order: 2
      }
    }),
    prisma.historyEvent.create({
      data: {
        year: 2015,
        title: 'Integrated Clinic Opens',
        description: 'Launched our on-campus clinic, serving both as a community healthcare facility and hands-on training environment for students. First 1,000 patients treated.',
        icon: 'Heart',
        color: 'accent-orange',
        stats: ['1,000+ Patients Treated', '300+ Students'],
        order: 3
      }
    }),
    prisma.historyEvent.create({
      data: {
        year: 2020,
        title: 'International Recognition',
        description: 'Established partnerships with leading international institutions and received recognition from global alternative medicine organizations.',
        icon: 'GraduationCap',
        color: 'ucsf-blue',
        stats: ['500+ Graduates', '5 International Partners'],
        order: 4
      }
    }),
    prisma.historyEvent.create({
      data: {
        year: 2024,
        title: '15 Years of Excellence',
        description: 'Celebrating 15 years of transforming lives through alternative medicine education. Over 10,000 patients treated and 500+ graduates making a difference in healthcare.',
        icon: 'Award',
        color: 'medical-green',
        stats: ['10,000+ Patients', '500+ Graduates'],
        order: 5
      }
    })
  ])

  console.log('✅ History events created:', historyEvents.length)

  // Create Achievements
  const achievements = await Promise.all([
    prisma.achievement.create({
      data: {
        title: 'NUC Accreditation',
        description: 'First alternative medicine institution in Nigeria to receive full accreditation from the National Universities Commission.',
        icon: 'Award',
        color: 'ucsf-blue',
        order: 1
      }
    }),
    prisma.achievement.create({
      data: {
        title: '500+ Graduates',
        description: 'Proud graduates now serving communities across Nigeria and internationally as alternative medicine practitioners.',
        icon: 'GraduationCap',
        color: 'medical-green',
        order: 2
      }
    }),
    prisma.achievement.create({
      data: {
        title: '10,000+ Patients',
        description: 'Our integrated clinic has provided compassionate care to thousands of patients seeking alternative medicine treatments.',
        icon: 'Heart',
        color: 'accent-orange',
        order: 3
      }
    }),
    prisma.achievement.create({
      data: {
        title: 'Expert Faculty',
        description: 'World-class faculty with international training and decades of experience in alternative medicine practice.',
        icon: 'Users',
        color: 'ucsf-blue',
        order: 4
      }
    }),
    prisma.achievement.create({
      data: {
        title: 'Modern Campus',
        description: 'State-of-the-art facilities including integrated clinic, herbal garden, and research laboratories.',
        icon: 'MapPin',
        color: 'medical-green',
        order: 5
      }
    }),
    prisma.achievement.create({
      data: {
        title: 'Research Excellence',
        description: 'Published research contributing to the advancement of alternative medicine knowledge and practice.',
        icon: 'CheckCircle',
        color: 'accent-orange',
        order: 6
      }
    })
  ])

  console.log('✅ Achievements created:', achievements.length)

  // Create Publications
  const publications = await Promise.all([
    prisma.publication.create({
      data: {
        title: 'Efficacy of Homeopathic Treatment in Chronic Migraine Management',
        description: 'A randomized controlled trial examining the effectiveness of individualized homeopathic remedies in reducing migraine frequency and intensity.',
        type: 'journal',
        year: 2024,
        journal: 'Alternative Medicine Review',
        authors: ['Dr. Sarah Adebayo', 'Dr. Michael Okonkwo', 'Dr. Fatima Ibrahim']
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Traditional Nigerian Herbs in Diabetes Management',
        description: 'Investigation of hypoglycemic effects of indigenous plant extracts and their potential integration into diabetes care protocols.',
        type: 'conference',
        year: 2024,
        journal: 'International Herbal Medicine Conference',
        authors: ['Dr. Fatima Ibrahim', 'Dr. Sarah Adebayo']
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Integrative Approach to Pediatric Asthma Treatment',
        description: 'A comprehensive study comparing conventional asthma treatment with integrated alternative medicine approaches in pediatric patients.',
        type: 'journal',
        year: 2023,
        journal: 'Journal of Integrative Medicine',
        authors: ['Dr. Michael Okonkwo', 'Dr. Sarah Adebayo']
      }
    })
  ])

  console.log('✅ Publications created:', publications.length)

  // Create Research Studies
  const researchStudies = await Promise.all([
    prisma.researchStudy.create({
      data: {
        title: 'Homeopathic Treatment for Fibromyalgia',
        description: 'A 2-year randomized controlled trial investigating the effectiveness of individualized homeopathic remedies in managing fibromyalgia symptoms and improving quality of life.',
        status: 'active',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2025-12-31'),
        participants: 150,
        centers: 3
      }
    }),
    prisma.researchStudy.create({
      data: {
        title: 'Herbal Medicine for Hypertension',
        description: 'Clinical investigation of traditional Nigerian herbs and their potential as adjunct therapy for hypertension management in adult patients.',
        status: 'recruiting',
        startDate: new Date('2024-03-01'),
        endDate: new Date('2026-03-31'),
        participants: 200,
        centers: 1
      }
    })
  ])

  console.log('✅ Research studies created:', researchStudies.length)

  // Create Collaborations
  const collaborations = await Promise.all([
    prisma.collaboration.create({
      data: {
        name: 'Nigerian Institute of Medical Research',
        description: 'Collaborative studies on traditional medicine validation',
        logo: 'NIMR'
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'University College London',
        description: 'International research partnerships in integrative medicine',
        logo: 'UCL'
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'World Health Organization',
        description: 'Traditional medicine policy development',
        logo: 'WHO'
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'National Institutes of Health',
        description: 'Complementary and alternative medicine research',
        logo: 'NIH'
      }
    })
  ])

  console.log('✅ Collaborations created:', collaborations.length)

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
