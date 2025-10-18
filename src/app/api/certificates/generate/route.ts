import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import fs from 'fs'
import path from 'path'

// Simple PDF generation using HTML to PDF conversion
// In production, you'd want to use a proper PDF library like puppeteer or jsPDF

export async function POST(request: NextRequest) {
  try {
    const { certificateId, studentId } = await request.json()

    if (!certificateId || !studentId) {
      return NextResponse.json(
        { error: 'Certificate ID and Student ID are required' },
        { status: 400 }
      )
    }

    // Get certificate and student data
    const certificate = await prisma.studentCertificate.findFirst({
      where: { id: certificateId, userId: studentId }
    })

    if (!certificate) {
      return NextResponse.json(
        { error: 'Certificate not found' },
        { status: 404 }
      )
    }

    const student = await prisma.user.findUnique({
      where: { id: studentId }
    })

    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      )
    }

    // Generate PDF filename
    const filename = `${certificate.certificateType.toLowerCase().replace(/\s+/g, '-')}-${student.studentId || student.id.slice(-8)}.pdf`
    const filePath = path.join(process.cwd(), 'public', 'certificates', filename)

    // Ensure certificates directory exists
    const certificatesDir = path.join(process.cwd(), 'public', 'certificates')
    if (!fs.existsSync(certificatesDir)) {
      fs.mkdirSync(certificatesDir, { recursive: true })
    }

    // Generate HTML content for the certificate
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Certificate - ${certificate.title}</title>
      <style>
        body {
          font-family: 'Times New Roman', serif;
          margin: 0;
          padding: 40px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .certificate {
          background: white;
          border: 8px solid #1e40af;
          border-radius: 20px;
          padding: 60px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          max-width: 800px;
          width: 100%;
        }
        .header {
          margin-bottom: 40px;
        }
        .logo {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 10px;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #6b7280;
          font-style: italic;
        }
        .certificate-title {
          font-size: 2rem;
          font-weight: bold;
          color: #111827;
          margin: 40px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .awarded-to {
          font-size: 1.1rem;
          color: #374151;
          margin-bottom: 20px;
        }
        .student-name {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .description {
          font-size: 1.1rem;
          color: #4b5563;
          margin: 30px 0;
          line-height: 1.6;
        }
        .date-section {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .date {
          font-size: 1rem;
          color: #6b7280;
        }
        .signature {
          font-size: 1rem;
          color: #6b7280;
          border-top: 2px solid #1e40af;
          padding-top: 10px;
          margin-top: 20px;
        }
        .seal {
          width: 120px;
          height: 120px;
          border: 4px solid #1e40af;
          border-radius: 50%;
          margin: 20px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #1e40af;
          font-weight: bold;
          text-align: center;
          line-height: 1.2;
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="header">
          <div class="logo">MOCHAM</div>
          <div class="subtitle">Modern College of Homoeopathy/Alternative Medicine</div>
        </div>
        
        <div class="certificate-title">Certificate of Completion</div>
        
        <div class="awarded-to">This is to certify that</div>
        
        <div class="student-name">${student.firstName || student.name || 'Student'}</div>
        
        <div class="description">
          ${certificate.description || `Has successfully completed the requirements for ${certificate.title}`}
        </div>
        
        <div class="seal">
          MOCHAM<br/>
          OFFICIAL<br/>
          SEAL<br/>
          ${new Date().getFullYear()}
        </div>
        
        <div class="date-section">
          <div class="date">
            <strong>Date Issued:</strong><br/>
            ${new Date(certificate.issueDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div class="signature">
            <strong>Authorized Signature</strong><br/>
            Dr. Sarah Adebayo<br/>
            President, MOCHAM
          </div>
        </div>
      </div>
    </body>
    </html>
    `

    // For now, we'll create an HTML file that can be converted to PDF
    // In production, you'd use puppeteer or similar to generate actual PDF
    fs.writeFileSync(filePath.replace('.pdf', '.html'), htmlContent)

    // Update certificate with the file path
    await prisma.studentCertificate.update({
      where: { id: certificateId },
      data: { 
        fileUrl: `/certificates/${filename.replace('.pdf', '.html')}`,
        // In production, you'd generate actual PDF and save it
      }
    })

    return NextResponse.json({
      success: true,
      fileUrl: `/certificates/${filename.replace('.pdf', '.html')}`,
      message: 'Certificate generated successfully'
    })

  } catch (error) {
    console.error('Error generating certificate:', error)
    return NextResponse.json(
      { error: 'Failed to generate certificate' },
      { status: 500 }
    )
  }
}
