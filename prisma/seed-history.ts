import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedHistoryData() {
  console.log('Seeding history data...')

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

  console.log('Created founder:', founder.name)

  // Insert key college history events
  const historyEvents = [
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

  for (const event of historyEvents) {
    await prisma.collegeHistoryEvent.create({ data: event })
  }

  console.log('Created college history events')

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

  console.log('Created academic programs history')

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

  console.log('Created facilities history')

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

  console.log('Created legacy achievements')

  // Insert placeholder historical documents with /IMG.JPG as placeholder
  const historicalDocuments = [
    {
      title: 'Dr. E. U. Umoren Portrait',
      documentType: 'image',
      description: 'Official portrait of the founder',
      year: 1901,
      isFeatured: true,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'College Foundation Certificate',
      documentType: 'document',
      description: 'Official certificate of college establishment',
      year: 1982,
      isFeatured: true,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'First Graduation Ceremony',
      documentType: 'photo',
      description: 'First matriculation and convocation ceremony',
      year: 1982,
      isFeatured: true,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'International Accreditation',
      documentType: 'certificate',
      description: 'International recognition certificates',
      year: 2007,
      isFeatured: true,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'Modern Campus View',
      documentType: 'image',
      description: 'Current campus facilities',
      year: 2024,
      isFeatured: true,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'Historical Newspaper Clippings',
      documentType: 'newspaper',
      description: 'Monitor Newspaper columns by Dr. Umoren',
      year: 1950,
      isFeatured: false,
      fileUrl: '/IMG.JPG'
    },
    {
      title: 'Academic Achievements Gallery',
      documentType: 'photo',
      description: 'Gallery of academic milestones',
      year: 2024,
      isFeatured: false,
      fileUrl: '/IMG.JPG'
    }
  ]

  for (const document of historicalDocuments) {
    await prisma.historicalDocument.create({ data: document })
  }

  console.log('Created historical documents')

  console.log('History data seeding completed!')
}

export default seedHistoryData

if (require.main === module) {
  seedHistoryData()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
