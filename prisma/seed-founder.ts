import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedFounderInfo() {
  console.log('🌱 Seeding founder information...')

  try {
    // Check if founder info already exists
    const existingFounder = await prisma.founderInfo.findFirst()
    
    if (existingFounder) {
      console.log('⚠️  Founder info already exists. Updating existing record...')
      
      // Update existing founder info
      const updatedFounder = await prisma.founderInfo.update({
        where: { id: existingFounder.id },
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
      
      console.log('✅ Updated founder info:', updatedFounder.name)
    } else {
      console.log('📝 Creating new founder info...')
      
      // Create new founder info
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
      
      console.log('✅ Created founder info:', founder.name)
    }
    
    console.log('🎉 Founder info seeding completed successfully!')
    
  } catch (error) {
    console.error('❌ Error during founder info seeding:', error)
    throw error
  }
}

seedFounderInfo()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
