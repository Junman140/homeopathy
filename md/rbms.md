# Role-Based Management System (RBMS) - Portal Documentation

## Overview
The RBMS defines user roles, permissions, and access control for the Medical & Homeopathy School +  
---

## User Roles & Hierarchy

### 1. **Super Admin**
- **Full System Control**
- **Permissions:**
  - All admin functions
  - System configuration
  - Role management and assignment
  - Database backups and maintenance
  - Security settings and audit logs
  - Master data management


### 2. **Student**
- **Academic and Clinical Access**
- **Permissions:**
  - Personal profile management
  - Course registration and enrollment
  - Assignment submission
  - Grade and result viewing
  - Fee payment and receipt download
  - Clinic appointment booking (as patient)
  - Library and resource access
  - Academic calendar viewing
  - Communication with lecturers

 

## Access Control Implementation

### Authentication Flow
```
1. User Login → Role Verification → Dashboard Routing
2. Session Management → Role-based Menu Loading
3. Route Protection → Permission Validation
4. Action Authorization → Audit Logging
```

### Dashboard Customization by Role

#### **Super Admin Dashboard**
- System overview and health metrics
- User activity monitoring
- Security alerts and logs
- Database performance metrics
- Revenue and enrollment overview

#### **School Administrator Dashboard**
- Student enrollment statistics
- Academic performance metrics
- Fee collection status
- Upcoming academic events
- Staff performance overview

#### **Clinic Administrator Dashboard**
- Patient appointment overview
- Medical staff schedules
- Clinic revenue metrics
- Patient satisfaction scores
- Medical inventory status

#### **Finance Officer Dashboard**
- Payment processing queue
- Revenue analytics
- Outstanding payments
- Financial reports
- Budget vs actual spending

#### **Student Dashboard**
- Academic progress overview
- Upcoming assignments and exams
- Payment status
- Clinic appointments
- Academic calendar

#### **Patient Dashboard**
- Upcoming appointments
- Medical history summary
- Prescription status
- Outstanding bills
- Health tips and resources

---

## Security Measures

### Data Protection
- **Role-based data encryption**
- **Audit trails for all actions**
- **Session timeout management**
- **IP-based access restrictions**
- **Two-factor authentication for admin roles**

### Privacy Controls
- **Medical data HIPAA compliance**
- **Student record confidentiality**
- **Financial information security**
- **Role-based data masking**

---

## Implementation Notes

### Database Schema
```sql
-- Users table with role assignment
users (id, email, password_hash, role_id, status, created_at)

-- Roles table
roles (id, name, description, permissions_json)

-- User permissions (granular control)
user_permissions (user_id, permission_id, granted_by, granted_at)

-- Session management
user_sessions (id, user_id, session_token, expires_at, ip_address)

-- Audit log
audit_logs (id, user_id, action, resource, old_values, new_values, timestamp)
```

### Role Assignment Workflow
1. **Initial Setup**: Super admin creates base roles
2. **User Creation**: Admin assigns appropriate role during user creation
3. **Permission Override**: Granular permissions can be added/removed per user
4. **Role Updates**: Changes require approval workflow
5. **Access Review**: Periodic role and permission audits

---

## API Endpoints Structure

### Authentication
- `POST /auth/login` - User authentication
- `POST /auth/logout` - Session termination
- `GET /auth/profile` - User profile and permissions
- `POST /auth/refresh` - Token refresh

### Role Management (Admin Only)
- `GET /admin/roles` - List all roles
- `POST /admin/roles` - Create new role
- `PUT /admin/roles/:id` - Update role permissions
- `DELETE /admin/roles/:id` - Delete role

### User Management
- `GET /admin/users` - List users (filtered by role permissions)
- `POST /admin/users` - Create new user
- `PUT /admin/users/:id` - Update user (role-restricted fields)
- `GET /admin/users/:id/permissions` - Get user permissions

This RBMS ensures secure, organized access control while maintaining flexibility for the institution's unique academic and clinical needs.