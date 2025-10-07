import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting research database seeding...')

  // Create Publications
  const publications = await Promise.all([
    prisma.publication.create({
      data: {
        title: 'Efficacy of Homeopathic Treatment in Chronic Pain Management: A Randomized Controlled Trial',
        description: 'This study evaluates the effectiveness of individualized homeopathic treatment in managing chronic pain conditions compared to conventional pain management approaches.',
        content: `
          <h2>Abstract</h2>
          <p>Chronic pain affects millions of patients worldwide, often requiring long-term management with conventional medications that may have significant side effects. This randomized controlled trial investigated the efficacy of individualized homeopathic treatment in chronic pain management.</p>
          
          <h3>Methods</h3>
          <p>We conducted a 12-week randomized controlled trial with 150 patients suffering from chronic pain conditions. Patients were randomly assigned to either homeopathic treatment (n=75) or conventional pain management (n=75). Primary outcomes included pain intensity (VAS scale), quality of life (SF-36), and functional disability (ODI).</p>
          
          <h3>Results</h3>
          <p>Patients in the homeopathic group showed significant improvement in pain intensity (p<0.001), with 68% reporting ≥50% pain reduction compared to 45% in the conventional group. Quality of life scores improved significantly in both groups, with homeopathic treatment showing superior results in mental health domains.</p>
          
          <h3>Conclusion</h3>
          <p>Individualized homeopathic treatment demonstrates significant efficacy in chronic pain management with fewer adverse effects compared to conventional approaches. Further research is warranted to explore long-term outcomes and mechanisms of action.</p>
        `,
        type: 'journal',
        year: 2024,
        journal: 'Journal of Alternative and Complementary Medicine',
        authors: ['Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Aisha Okafor'],
        doi: '10.1089/acm.2024.001',
        url: 'https://example.com/publication1',
        imageUrl: '/research/homeopathy-pain-study.jpg',
        slug: 'homeopathy-chronic-pain-management',
        tags: ['homeopathy', 'chronic pain', 'randomized controlled trial', 'alternative medicine'],
        readingTime: 8,
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Traditional Nigerian Herbs in Diabetes Management: Phytochemical Analysis and Clinical Applications',
        description: 'Comprehensive analysis of traditional Nigerian medicinal plants used in diabetes management, including phytochemical profiling and clinical efficacy studies.',
        content: `
          <h2>Abstract</h2>
          <p>Diabetes mellitus is a growing health concern in Nigeria, with increasing reliance on traditional herbal medicines for management. This study analyzed the phytochemical composition and clinical efficacy of commonly used Nigerian herbs in diabetes treatment.</p>
          
          <h3>Methods</h3>
          <p>We collected and analyzed 15 traditional herbs commonly used for diabetes management in Nigeria. Phytochemical analysis included HPLC, GC-MS, and NMR spectroscopy. Clinical efficacy was evaluated through a 6-month observational study with 200 diabetic patients.</p>
          
          <h3>Results</h3>
          <p>Phytochemical analysis revealed high concentrations of flavonoids, alkaloids, and terpenoids with potential antidiabetic properties. Clinical study showed significant improvement in glycemic control (HbA1c reduction of 1.2% ± 0.3%) in patients using herbal preparations.</p>
          
          <h3>Conclusion</h3>
          <p>Traditional Nigerian herbs demonstrate significant potential in diabetes management through multiple mechanisms of action. Standardization and quality control measures are essential for safe clinical application.</p>
        `,
        type: 'journal',
        year: 2024,
        journal: 'African Journal of Traditional, Complementary and Alternative Medicines',
        authors: ['Dr. Fatima Ibrahim', 'Prof. John Adebayo', 'Dr. Grace Okonkwo'],
        doi: '10.4314/ajtcam.v21i2.1',
        imageUrl: '/research/nigerian-herbs-diabetes.jpg',
        slug: 'nigerian-herbs-diabetes-management',
        tags: ['traditional medicine', 'diabetes', 'phytochemistry', 'Nigeria'],
        readingTime: 12,
        isPublished: true
      }
    }),
    prisma.publication.create({
      data: {
        title: 'Integrative Medicine Approaches in Cancer Care: Patient Outcomes and Quality of Life',
        description: 'A prospective study examining the impact of integrative medicine approaches on cancer patient outcomes, quality of life, and treatment satisfaction.',
        content: `
          <h2>Abstract</h2>
          <p>Integrative medicine combines conventional cancer treatments with complementary therapies to address the whole person. This prospective study evaluated patient outcomes and quality of life in cancer patients receiving integrative care.</p>
          
          <h3>Methods</h3>
          <p>We conducted a 2-year prospective study with 300 cancer patients receiving integrative care including acupuncture, meditation, nutritional counseling, and herbal supplements alongside conventional treatment.</p>
          
          <h3>Results</h3>
          <p>Patients receiving integrative care showed improved quality of life scores (p<0.001), reduced treatment-related side effects (40% reduction in nausea, 35% reduction in fatigue), and higher treatment satisfaction rates (89% vs 67% in conventional care).</p>
          
          <h3>Conclusion</h3>
          <p>Integrative medicine approaches significantly improve quality of life and reduce treatment-related side effects in cancer patients. These findings support the integration of complementary therapies in comprehensive cancer care.</p>
        `,
        type: 'conference',
        year: 2024,
        journal: 'International Conference on Integrative Medicine',
        authors: ['Dr. Maria Santos', 'Prof. David Kim', 'Dr. Ngozi Eze'],
        imageUrl: '/research/integrative-cancer-care.jpg',
        slug: 'integrative-medicine-cancer-care',
        tags: ['integrative medicine', 'cancer care', 'quality of life', 'complementary therapies'],
        readingTime: 10,
        isPublished: true
      }
    })
  ])

  // Create Research Studies
  const researchStudies = await Promise.all([
    prisma.researchStudy.create({
      data: {
        title: 'Long-term Effects of Homeopathic Treatment on Autoimmune Disorders',
        description: 'A comprehensive longitudinal study examining the long-term effects of individualized homeopathic treatment on various autoimmune disorders including rheumatoid arthritis, lupus, and multiple sclerosis.',
        content: `
          <h2>Study Overview</h2>
          <p>Autoimmune disorders represent a significant challenge in modern medicine, often requiring lifelong management with immunosuppressive medications. This longitudinal study investigates the potential of homeopathic treatment to provide long-term benefits for autoimmune conditions.</p>
          
          <h3>Study Design</h3>
          <p>This is a 5-year prospective cohort study following 500 patients with various autoimmune disorders. Patients receive individualized homeopathic treatment based on constitutional analysis and symptom presentation.</p>
          
          <h3>Primary Outcomes</h3>
          <ul>
            <li>Disease activity scores</li>
            <li>Quality of life measures</li>
            <li>Medication reduction</li>
            <li>Long-term remission rates</li>
          </ul>
          
          <h3>Expected Results</h3>
          <p>We anticipate significant improvements in disease activity and quality of life, with potential reduction in conventional medication requirements. Long-term follow-up will provide insights into the sustainability of homeopathic treatment effects.</p>
        `,
        status: 'active',
        startDate: new Date('2023-01-15'),
        endDate: new Date('2028-01-15'),
        participants: 500,
        centers: 8,
        imageUrl: '/research/autoimmune-study.jpg',
        slug: 'homeopathy-autoimmune-disorders',
        tags: ['homeopathy', 'autoimmune disorders', 'longitudinal study', 'rheumatoid arthritis'],
        readingTime: 6,
        isActive: true
      }
    }),
    prisma.researchStudy.create({
      data: {
        title: 'Efficacy of Acupuncture in Post-Stroke Rehabilitation',
        description: 'A randomized controlled trial evaluating the effectiveness of acupuncture as an adjunct therapy in post-stroke rehabilitation, focusing on motor function recovery and quality of life improvement.',
        content: `
          <h2>Study Overview</h2>
          <p>Stroke rehabilitation is a critical component of recovery, and complementary therapies like acupuncture may enhance conventional rehabilitation approaches. This study evaluates acupuncture's role in post-stroke recovery.</p>
          
          <h3>Study Design</h3>
          <p>Randomized controlled trial with 200 post-stroke patients receiving either standard rehabilitation plus acupuncture or standard rehabilitation alone. Treatment duration is 12 weeks with 6-month follow-up.</p>
          
          <h3>Primary Outcomes</h3>
          <ul>
            <li>Motor function recovery (Fugl-Meyer Assessment)</li>
            <li>Activities of daily living (Barthel Index)</li>
            <li>Quality of life (Stroke Impact Scale)</li>
            <li>Pain reduction</li>
          </ul>
        `,
        status: 'recruiting',
        startDate: new Date('2024-03-01'),
        endDate: new Date('2025-12-31'),
        participants: 200,
        centers: 5,
        imageUrl: '/research/acupuncture-stroke.jpg',
        slug: 'acupuncture-stroke-rehabilitation',
        tags: ['acupuncture', 'stroke rehabilitation', 'motor function', 'randomized controlled trial'],
        readingTime: 5,
        isActive: true
      }
    }),
    prisma.researchStudy.create({
      data: {
        title: 'Mind-Body Interventions for Anxiety and Depression in Medical Students',
        description: 'Investigating the effectiveness of mindfulness meditation, yoga, and breathing exercises in reducing anxiety and depression among medical students during their training.',
        content: `
          <h2>Study Overview</h2>
          <p>Medical education is associated with high levels of stress, anxiety, and depression among students. This study explores mind-body interventions as tools for mental health support during medical training.</p>
          
          <h3>Study Design</h3>
          <p>Prospective cohort study with 300 medical students across different years of training. Participants receive 8-week mindfulness-based intervention program with pre and post-intervention assessments.</p>
          
          <h3>Interventions</h3>
          <ul>
            <li>Mindfulness meditation</li>
            <li>Yoga sessions</li>
            <li>Breathing exercises</li>
            <li>Stress management workshops</li>
          </ul>
        `,
        status: 'completed',
        startDate: new Date('2023-09-01'),
        endDate: new Date('2024-05-31'),
        participants: 300,
        centers: 3,
        imageUrl: '/research/mind-body-medical-students.jpg',
        slug: 'mind-body-interventions-medical-students',
        tags: ['mind-body medicine', 'anxiety', 'depression', 'medical students', 'mindfulness'],
        readingTime: 4,
        isActive: true
      }
    })
  ])

  // Create Collaborations
  const collaborations = await Promise.all([
    prisma.collaboration.create({
      data: {
        name: 'World Health Organization Traditional Medicine Centre',
        description: 'International collaboration focused on research and development of traditional medicine practices, particularly homeopathy and herbal medicine.',
        logo: '/collaborations/who-logo.png',
        website: 'https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine',
        isActive: true
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'Nigerian Institute of Medical Research',
        description: 'Collaborative research partnership focusing on traditional Nigerian medicine, phytochemistry, and clinical applications.',
        logo: '/collaborations/nimr-logo.png',
        website: 'https://nimr.gov.ng',
        isActive: true
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'International Homeopathic Medical Association',
        description: 'Global network of homeopathic practitioners and researchers working together to advance evidence-based homeopathic medicine.',
        logo: '/collaborations/ihma-logo.png',
        website: 'https://www.ihma.org',
        isActive: true
      }
    }),
    prisma.collaboration.create({
      data: {
        name: 'University of Lagos College of Medicine',
        description: 'Academic partnership for joint research projects, student exchanges, and faculty development in alternative medicine.',
        logo: '/collaborations/unilag-logo.png',
        website: 'https://medicine.unilag.edu.ng',
        isActive: true
      }
    })
  ])

  console.log(`✅ Created ${publications.length} publications`)
  console.log(`✅ Created ${researchStudies.length} research studies`)
  console.log(`✅ Created ${collaborations.length} collaborations`)
  console.log('🎉 Research database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
