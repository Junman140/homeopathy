import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting comprehensive database seeding...')

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
        authors: ['Dr. Sarah Adebayo', 'Dr. Michael Okonkwo', 'Dr. Fatima Ibrahim'],
        slug: 'efficacy-homeopathic-treatment-chronic-migraine-management'
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Traditional Nigerian Herbs in Diabetes Management',
        description: 'Investigation of hypoglycemic effects of indigenous plant extracts and their potential integration into diabetes care protocols.',
        type: 'conference',
        year: 2024,
        journal: 'International Herbal Medicine Conference',
        authors: ['Dr. Fatima Ibrahim', 'Dr. Sarah Adebayo'],
        slug: 'traditional-nigerian-herbs-diabetes-management'
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Integrative Approach to Pediatric Asthma Treatment',
        description: 'A comprehensive study comparing conventional asthma treatment with integrated alternative medicine approaches in pediatric patients.',
        type: 'journal',
        year: 2023,
        journal: 'Journal of Integrative Medicine',
        authors: ['Dr. Michael Okonkwo', 'Dr. Sarah Adebayo'],
        slug: 'integrative-approach-pediatric-asthma-treatment'
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
        centers: 3,
        slug: 'homeopathic-treatment-fibromyalgia'
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
        centers: 1,
        slug: 'herbal-medicine-hypertension'
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

  // ==================== HISTORY DATA ====================
  console.log('📚 Adding comprehensive history data...')

  // Insert founder information
  const founder = await prisma.founderInfo.create({
    data: {
      name: 'Dr. Effiong Udo Umoren',
      birthDate: new Date('1901-12-18'),
      deathDate: new Date('2002-12-18'),
      title: 'Founder and Father of Homeopathy in Nigeria',
      biography: {
        earlyLife: {
          birthPlace: 'Ikot Akpan, Ikot-Eyo in Ubium clan, Nsit Ubium Local Government Area of Akwa Ibom State',
          father: 'Effiong Udo Umoren - popular and renowned herbalist, traditional medicine healer and farmer',
          mother: 'Mrs. Edemekong Udo Umoren from Obio Akpa Idu in Ubium clan'
        },
        internationalEducation: {
          institution: 'International Free Protestant Episcopal University, London',
          degrees: [
            'Degree in Naturopathy (N.D) - 1930',
            'Degree in Biochemistry - 1933',
            'Doctorate degree in Homeopathic Medicine (DHM) - 1935',
            'Doctor of Science (D.Sc) - 1950',
            'Doctor of Philosophy in Homeopathic Medicine (PhD)',
            'Degree in Diet and nutrition - 1962',
            'Degree in Psychology - 1971',
            'Doctor of Botanic medicine - 1972'
          ]
        },
        achievements: [
          'First practitioner of homeopathic system of medicine in Nigeria',
          'Founder of first Association of Nigerian Homeopathic and natural therapeutics in 1965',
          'First president and Founding father of Nigerian Homeopathic Association',
          'Well known columnist in the monitor Newspaper',
          'Elder statesman in the vanguard for the struggle of emancipation from colonial masters'
        ],
        character: [
          'Reserved in early life, loved quiet life',
          'Extra-ordinary boy with hidden virtue',
          'Inquisitive, curious, witty and meticulous',
          'Researchful and fond of asking questions',
          'Great dreamer of dreams and a doer of deeds'
        ]
      }
    }
  })

  console.log('✅ Created founder:', founder.name)

  // Insert key college history events
  const collegeHistoryEvents = [
    {
      year: 1901,
      title: 'Birth of Dr. Effiong Udo Umoren',
      description: 'The founder and father of Homeopathy in Nigeria was born',
      eventType: 'foundation',
      details: {
        location: 'Ikot Akpan, Ikot-Eyo in Ubium clan',
        significance: 'Beginning of homeopathy journey in Nigeria'
      },
      order: 1
    },
    {
      year: 1940,
      title: 'Start of Medical Practice',
      description: 'Dr. Umoren began practicing homeopathic medicine',
      eventType: 'milestone',
      details: {
        practiceType: 'Homeopathic medicine',
        location: 'Nigeria'
      },
      order: 2
    },
    {
      year: 1950,
      title: 'Private Practice Established',
      description: 'Dr. Umoren established his private practice',
      eventType: 'milestone',
      details: {
        practiceType: 'Private homeopathic practice'
      },
      order: 3
    },
    {
      year: 1965,
      title: 'First Nigerian Homeopathic Association',
      description: 'Founded the first Association of Nigerian Homeopathic and natural therapeutics',
      eventType: 'achievement',
      details: {
        registration: 'No. 130384',
        role: 'First president and Founding father'
      },
      order: 4
    },
    {
      year: 1982,
      title: 'College Founded',
      description: 'Cottage Homoeopathic Medical College and Hospital established',
      eventType: 'foundation',
      details: {
        location: '60 Aka Road, Uyo',
        originalName: 'Cottage Homoeopathic Medical College and Hospital'
      },
      order: 5
    },
    {
      year: 2002,
      title: 'Passing of the Founder',
      description: 'Dr. Effiong Udo Umoren peacefully transitioned',
      eventType: 'milestone',
      details: {
        date: '18th December, 2002',
        legacy: 'End of an era, beginning of institutional legacy'
      },
      order: 6
    },
    {
      year: 2007,
      title: 'Curriculum Modernization',
      description: '10-man committee set up to review and rewrite college curriculum',
      eventType: 'milestone',
      details: {
        committeeSize: 10,
        purpose: 'Comprehensive, authentic, accurate compilation'
      },
      order: 7
    }
  ]

  for (const event of collegeHistoryEvents) {
    await prisma.collegeHistoryEvent.create({ data: event })
  }

  console.log('✅ Created college history events')

  // Insert academic programs history
  const academicPrograms = [
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Homoeopathic Clinical Medicine',
      programName: 'Advanced Diploma in Homoeopathic Medicine',
      degreeType: 'DHM [Advanced]',
      establishedYear: 1982,
      description: 'Equivalent to first degree [B.Sc.] in the discipline'
    },
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Homoeopathic Nursing/Midwifery',
      programName: 'Ordinary Diploma in Homoeopathic Nursing and Midwifery',
      degreeType: 'OD-HNM',
      establishedYear: 1982,
      description: 'Homoeopathy in obstetric and Gynecology'
    },
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Homoeopathic Nursing/Midwifery',
      programName: 'Advanced Diploma in Homoeopathic Nursing and Midwifery',
      degreeType: 'AD-HNM',
      establishedYear: 1982,
      description: 'Advanced nursing and midwifery with homoeopathy'
    },
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Veterinary Homoeopathy',
      programName: 'Diploma in Veterinary Homoeopathy',
      degreeType: 'D. Vet.HOM.',
      establishedYear: 1982,
      description: 'Veterinary application of homoeopathic principles'
    },
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Homoeopathic Pharmacy',
      programName: 'Advanced Diploma in Homoeopathic Pharmacy',
      degreeType: 'DHPh',
      establishedYear: 1982,
      description: 'Specialized training in homoeopathic pharmacy'
    },
    {
      facultyName: 'Homoeopathic Medical Sciences',
      departmentName: 'Electro-homoeopathy',
      programName: 'Diploma in Electro-homoeopathy',
      degreeType: 'Dip.EH',
      establishedYear: 1982,
      description: 'Modern electro-homoeopathic techniques'
    },
    {
      facultyName: 'Alternative/Complementary Medicine',
      programName: 'Various Alternative Medicine Programs',
      degreeType: 'Multiple',
      establishedYear: 1982,
      description: 'Degrees, post graduate diploma, advanced diploma, diploma and certificate programs'
    }
  ]

  for (const program of academicPrograms) {
    await prisma.academicProgramHistory.create({ data: program })
  }

  console.log('✅ Created academic programs history')

  // Insert facilities history
  const facilities = [
    {
      name: 'Anatomy/Physiology Laboratory',
      type: 'laboratory',
      description: 'Practical training and research facility for anatomy and physiology students',
      establishedYear: 1982,
      equipment: ['Modern anatomical models', 'Physiological measurement equipment']
    },
    {
      name: 'Pathology Laboratory',
      type: 'laboratory',
      description: 'Specialized laboratory for pathological studies and research',
      establishedYear: 1982,
      equipment: ['Microscopes', 'Pathological specimens']
    },
    {
      name: 'Pharmacy Laboratory',
      type: 'laboratory',
      description: 'Training facility for pharmaceutical sciences and drug preparation',
      establishedYear: 1982,
      equipment: ['Drug preparation equipment', 'Chemical analysis tools']
    },
    {
      name: 'Physics Laboratory',
      type: 'laboratory',
      description: 'Physics research and practical training facility',
      establishedYear: 1982,
      equipment: ['Physics measurement instruments', 'Experimental apparatus']
    },
    {
      name: 'Chemistry Laboratory',
      type: 'laboratory',
      description: 'Chemical analysis and research laboratory',
      establishedYear: 1982,
      equipment: ['Chemical analysis equipment', 'Laboratory glassware']
    },
    {
      name: 'Museum of Anatomy',
      type: 'museum',
      description: 'Collection of anatomical specimens and charts',
      establishedYear: 1982,
      equipment: ['Anatomical specimens', 'Educational charts']
    },
    {
      name: 'Museum of Pathology',
      type: 'museum',
      description: 'Pathological specimens and educational materials',
      establishedYear: 1982,
      equipment: ['Pathological specimens', 'Educational displays']
    },
    {
      name: 'Museum of Pharmacology',
      type: 'museum',
      description: 'Pharmacological specimens and educational resources',
      establishedYear: 1982,
      equipment: ['Drug specimens', 'Pharmacological charts']
    },
    {
      name: 'Research Centre',
      type: 'research_center',
      description: 'Central research facility for advanced studies',
      establishedYear: 1982,
      equipment: ['Research equipment', 'Study materials']
    }
  ]

  for (const facility of facilities) {
    await prisma.facilityHistory.create({ data: facility })
  }

  console.log('✅ Created facilities history')

  // Insert legacy achievements
  const legacyAchievements = [
    {
      title: 'First Homeopathy School in Nigeria',
      description: 'Established as the first institution dedicated to homeopathic medicine education in Nigeria',
      category: 'recognition',
      year: 1982,
      isFeatured: true
    },
    {
      title: 'International Recognition',
      description: 'Approved by multiple international homeopathic organizations',
      category: 'international',
      year: 2007,
      isFeatured: true
    },
    {
      title: 'Graduate Success',
      description: 'Produced eminent Homeopathic medical Doctors and nurses across Nigeria and neighboring countries',
      category: 'graduation',
      year: 2024,
      isFeatured: true
    },
    {
      title: 'Community Impact',
      description: 'Served as beacon of alternative medicine education and practice',
      category: 'community',
      year: 2024,
      isFeatured: true
    },
    {
      title: 'Research Excellence',
      description: 'Continuous research and development in homeopathic medicine',
      category: 'research',
      year: 2024,
      isFeatured: true
    }
  ]

  for (const achievement of legacyAchievements) {
    await prisma.legacyAchievement.create({ data: achievement })
  }

  console.log('✅ Created legacy achievements')

  // Insert historical documents with available images
  const historicalDocuments = [
    {
      title: 'Dr. E. U. Umoren Portrait',
      documentType: 'image',
      description: 'Official portrait of the founder',
      year: 1901,
      isFeatured: true,
      fileUrl: '/3.png'
    },
    {
      title: 'College Foundation Certificate',
      documentType: 'document',
      description: 'Official certificate of college establishment',
      year: 1982,
      isFeatured: true,
      fileUrl: '/b.png'
    },
    {
      title: 'First Graduation Ceremony',
      documentType: 'photo',
      description: 'First matriculation and convocation ceremony',
      year: 1982,
      isFeatured: true,
      fileUrl: '/h.png'
    },
    {
      title: 'International Accreditation',
      documentType: 'certificate',
      description: 'International recognition certificates',
      year: 2007,
      isFeatured: true,
      fileUrl: '/aerial.jpg'
    },
    {
      title: 'Modern Campus View',
      documentType: 'image',
      description: 'Current campus facilities',
      year: 2024,
      isFeatured: true,
      fileUrl: '/abs.jpg'
    },
    {
      title: 'Historical Newspaper Clippings',
      documentType: 'newspaper',
      description: 'Monitor Newspaper columns by Dr. Umoren',
      year: 1950,
      isFeatured: false,
      fileUrl: '/aa.jpg'
    },
    {
      title: 'Academic Achievements Gallery',
      documentType: 'photo',
      description: 'Gallery of academic milestones',
      year: 2024,
      isFeatured: false,
      fileUrl: '/tippi-mackenzie-homepage-banner-updated.jpeg'
    }
  ]

  for (const document of historicalDocuments) {
    await prisma.historicalDocument.create({ data: document })
  }

  console.log('✅ Created historical documents')

  console.log('🎉 Comprehensive database seeding completed successfully!')
  console.log('📊 Summary:')
  console.log(`   - ${programs.length} Programs`)
  console.log(`   - ${services.length} Services`)
  console.log(`   - ${doctors.length} Doctors`)
  console.log(`   - ${news.length} News Articles`)
  console.log(`   - ${testimonials.length} Testimonials`)
  console.log(`   - ${historyEvents.length} History Events`)
  console.log(`   - ${achievements.length} Achievements`)
  console.log(`   - ${publications.length} Publications`)
  console.log(`   - ${researchStudies.length} Research Studies`)
  console.log(`   - ${collaborations.length} Collaborations`)
  console.log(`   - 1 Founder Info`)
  console.log(`   - ${collegeHistoryEvents.length} College History Events`)
  console.log(`   - ${academicPrograms.length} Academic Programs`)
  console.log(`   - ${facilities.length} Facilities`)
  console.log(`   - ${legacyAchievements.length} Legacy Achievements`)
  console.log(`   - ${historicalDocuments.length} Historical Documents`)
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
