# Student Portal Login Credentials

## Test Student Accounts

Use these credentials to test the student portal login:

### Student 1: John Doe
- **Email:** `john.doe@student.mocham.edu`
- **Registration Number:** `MOCHAM2024001`
- **Program:** Masters in Homeopathic Medicine

### Student 2: Jane Smith
- **Email:** `jane.smith@student.mocham.edu`
- **Registration Number:** `MOCHAM2024002`
- **Program:** PhD in Homeopathic Medicine

## How to Access the Portal

1. Navigate to `/portal` (Portal Landing Page)
2. Click the "START NOW" button
3. In the modal, click the "Login" tab
4. Enter one of the test student emails and registration numbers
5. Click "Login to Portal"
6. You will be redirected to the student dashboard

## Enrollment vs Login

- **Enrollment (Enrol Tab):** For prospective students to submit applications. After submission, users are redirected to the main website.
- **Login Tab:** For existing students to access their dashboard using their student email and registration number.

## Technical Notes

- Student sessions are stored in localStorage
- Session persists across page refreshes
- Logout clears the session and redirects to portal landing page
- The dashboard is protected and requires a valid session to access

