// Fallback history data until database API is fully synced
export const founderData = {
  id: '1',
  name: 'Dr. Effiong Udo Umoren',
  birthDate: '1901-12-18',
  deathDate: '2002-12-18',
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
      'First president and Founding father of Nigerian Homeopathic Association'
    ]
  }
}

export const collegeHistoryEventsData = [
  {
    id: '1',
    year: 1901,
    title: 'Birth of Dr. Effiong Udo Umoren',
    description: 'The founder and father of Homeopathy in Nigeria was born',
    eventType: 'foundation',
    details: { location: 'Ikot Akpan, Ikot-Eyo in Ubium clan' },
    isActive: true,
    order: 1
  },
  {
    id: '2',
    year: 1940,
    title: 'Start of Medical Practice',
    description: 'Dr. Umoren began practicing homeopathic medicine',
    eventType: 'milestone',
    details: { practiceType: 'Homeopathic medicine' },
    isActive: true,
    order: 2
  },
  {
    id: '3',
    year: 1950,
    title: 'Private Practice Established',
    description: 'Dr. Umoren established his private practice',
    eventType: 'milestone',
    details: {},
    isActive: true,
    order: 3
  },
  {
    id: '4',
    year: 1965,
    title: 'First Nigerian Homeopathic Association',
    description: 'Founded the first Association of Nigerian Homeopathic and natural therapeutics',
    eventType: 'achievement',
    details: { registration: 'No. 130384' },
    isActive: true,
    order: 4
  },
  {
    id: '5',
    year: 1982,
    title: 'College Founded',
    description: 'Cottage Homoeopathic Medical College and Hospital established',
    eventType: 'foundation',
    details: { location: '60 Aka Road, Uyo' },
    isActive: true,
    order: 5
  },
  {
    id: '6',
    year: 2002,
    title: 'Passing of the Founder',
    description: 'Dr. Effiong Udo Umoren peacefully transitioned',
    eventType: 'milestone',
    details: {},
    isActive: true,
    order: 6
  },
  {
    id: '7',
    year: 2007,
    title: 'Curriculum Modernization',
    description: '10-man committee set up to review and rewrite college curriculum',
    eventType: 'milestone',
    details: {},
    isActive: true,
    order: 7
  }
]

export const academicProgramsHistoryData = [
  {
    id: '1',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Homoeopathic Clinical Medicine',
    programName: 'Advanced Diploma in Homoeopathic Medicine',
    degreeType: 'DHM [Advanced]',
    establishedYear: 1982,
    description: 'Equivalent to first degree [B.Sc.] in the discipline',
    isActive: true
  },
  {
    id: '2',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Homoeopathic Nursing/Midwifery',
    programName: 'Ordinary Diploma in Homoeopathic Nursing and Midwifery',
    degreeType: 'OD-HNM',
    establishedYear: 1982,
    description: 'Homoeopathy in obstetric and Gynecology',
    isActive: true
  },
  {
    id: '3',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Homoeopathic Nursing/Midwifery',
    programName: 'Advanced Diploma in Homoeopathic Nursing and Midwifery',
    degreeType: 'AD-HNM',
    establishedYear: 1982,
    description: 'Advanced nursing and midwifery with homoeopathy',
    isActive: true
  },
  {
    id: '4',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Veterinary Homoeopathy',
    programName: 'Diploma in Veterinary Homoeopathy',
    degreeType: 'D. Vet.HOM.',
    establishedYear: 1982,
    description: 'Veterinary application of homoeopathic principles',
    isActive: true
  },
  {
    id: '5',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Homoeopathic Pharmacy',
    programName: 'Advanced Diploma in Homoeopathic Pharmacy',
    degreeType: 'DHPh',
    establishedYear: 1982,
    description: 'Specialized training in homoeopathic pharmacy',
    isActive: true
  },
  {
    id: '6',
    facultyName: 'Homoeopathic Medical Sciences',
    departmentName: 'Electro-homoeopathy',
    programName: 'Diploma in Electro-homoeopathy',
    degreeType: 'Dip.EH',
    establishedYear: 1982,
    description: 'Modern electro-homoeopathic techniques',
    isActive: true
  },
  {
    id: '7',
    facultyName: 'Alternative/Complementary Medicine',
    programName: 'Various Alternative Medicine Programs',
    degreeType: 'Multiple',
    establishedYear: 1982,
    description: 'Degrees, post graduate diploma, advanced diploma, diploma and certificate programs',
    isActive: true
  }
]

export const facilitiesHistoryData = [
  {
    id: '1',
    name: 'Anatomy/Physiology Laboratory',
    type: 'laboratory',
    description: 'Practical training and research facility for anatomy and physiology students',
    establishedYear: 1982,
    equipment: ['Modern anatomical models', 'Physiological measurement equipment'],
    isActive: true
  },
  {
    id: '2',
    name: 'Pathology Laboratory',
    type: 'laboratory',
    description: 'Specialized laboratory for pathological studies and research',
    establishedYear: 1982,
    equipment: ['Microscopes', 'Pathological specimens'],
    isActive: true
  },
  {
    id: '3',
    name: 'Pharmacy Laboratory',
    type: 'laboratory',
    description: 'Training facility for pharmaceutical sciences and drug preparation',
    establishedYear: 1982,
    equipment: ['Drug preparation equipment', 'Chemical analysis tools'],
    isActive: true
  },
  {
    id: '4',
    name: 'Physics Laboratory',
    type: 'laboratory',
    description: 'Physics research and practical training facility',
    establishedYear: 1982,
    equipment: ['Physics measurement instruments', 'Experimental apparatus'],
    isActive: true
  },
  {
    id: '5',
    name: 'Chemistry Laboratory',
    type: 'laboratory',
    description: 'Chemical analysis and research laboratory',
    establishedYear: 1982,
    equipment: ['Chemical analysis equipment', 'Laboratory glassware'],
    isActive: true
  },
  {
    id: '6',
    name: 'Museum of Anatomy',
    type: 'museum',
    description: 'Collection of anatomical specimens and charts',
    establishedYear: 1982,
    equipment: ['Anatomical specimens', 'Educational charts'],
    isActive: true
  },
  {
    id: '7',
    name: 'Museum of Pathology',
    type: 'museum',
    description: 'Pathological specimens and educational materials',
    establishedYear: 1982,
    equipment: ['Pathological specimens', 'Educational displays'],
    isActive: true
  },
  {
    id: '8',
    name: 'Museum of Pharmacology',
    type: 'museum',
    description: 'Pharmacological specimens and educational resources',
    establishedYear: 1982,
    equipment: ['Drug specimens', 'Pharmacological charts'],
    isActive: true
  },
  {
    id: '9',
    name: 'Research Centre',
    type: 'research_center',
    description: 'Central research facility for advanced studies',
    establishedYear: 1982,
    equipment: ['Research equipment', 'Study materials'],
    isActive: true
  }
]

export const legacyAchievementsData = [
  {
    id: '1',
    title: 'First Homeopathy School in Nigeria',
    description: 'Established as the first institution dedicated to homeopathic medicine education in Nigeria',
    category: 'recognition',
    year: 1982,
    isFeatured: true
  },
  {
    id: '2',
    title: 'International Recognition',
    description: 'Approved by multiple international homeopathic organizations',
    category: 'international',
    year: 2007,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Graduate Success',
    description: 'Produced eminent Homeopathic medical Doctors and nurses across Nigeria and neighboring countries',
    category: 'graduation',
    year: 2024,
    isFeatured: true
  },
  {
    id: '4',
    title: 'Community Impact',
    description: 'Served as beacon of alternative medicine education and practice',
    category: 'community',
    year: 2024,
    isFeatured: true
  },
  {
    id: '5',
    title: 'Research Excellence',
    description: 'Continuous research and development in homeopathic medicine',
    category: 'research',
    year: 2024,
    isFeatured: true
  }
]

export const historicalDocumentsData = [
  {
    id: '1',
    title: 'Dr. E. U. Umoren Portrait',
    documentType: 'image',
    description: 'Official portrait of the founder',
    year: 1901,
    isFeatured: true,
    fileUrl: '/IMG.JPG' // Add your image path here
  },
  {
    id: '2',
    title: 'College Foundation Certificate',
    documentType: 'document',
    description: 'Official certificate of college establishment',
    year: 1982,
    isFeatured: true,
    fileUrl: '/IMG.JPG' // Add your image path here
  },
  {
    id: '3',
    title: 'First Graduation Ceremony',
    documentType: 'photo',
    description: 'First matriculation and convocation ceremony',
    year: 1982,
    isFeatured: true,
    fileUrl: '/IMG.JPG' // Add your image path here
  },
  {
    id: '4',
    title: 'International Accreditation',
    documentType: 'certificate',
    description: 'International recognition certificates',
    year: 2007,
    isFeatured: true,
    fileUrl: '/IMG.JPG' // Add your image path here
  },
  {
    id: '5',
    title: 'Modern Campus View',
    documentType: 'image',
    description: 'Current campus facilities',
    year: 2024,
    isFeatured: true,
    fileUrl: '/IMG.JPG' // Add your image path here
  }
]

