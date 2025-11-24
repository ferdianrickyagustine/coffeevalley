# Coffee Valley

Backend API untuk Coffee Valley

## Tech Stack

- Node.js + Express.js
- PostgreSQL
- express-session (authentication)
- bcryptjs (password hashing)
- multer (file upload)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Configuration

Buat database PostgreSQL:

```sql
CREATE DATABASE coffeevalley;
```

Buat file `.env`:

```env
# Database
DB_USER=postgres
DB_PASS=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=coffeevalley

# Server
PORT=3000
SESSION_SECRET=secret
```

### 3. Run Migrations

```bash
npm run migrate
```

### 4. Seed Data

```bash
npm run seed
```

Default user untuk login:
- userId: `admin`
- password: `admin123`

### 5. Start Server
```bash
npx nodemon app
```

Server akan jalan di `http://localhost:3000`

## API Endpoints

### Authentication

**Login**
```
POST /login
Body: {
  "userId": "admin",
  "password": "admin123"
}
```

**Logout**
```
POST /logout
```

### Home / Bean of the Day

**Get Bean of the Day**
```
GET /home
```

### Catalog

**Get All Beans**
```
GET /catalog
```

**Get Bean by ID**
```
GET /catalog/:id
```

### Distributors

**Get All Distributors**
```
GET /distributors
```

**Get Distributor by ID**
```
GET /distributors/:id
```

**Create Distributor**
```
POST /distributors
Body: {
  "name": "Distributor Name",
  "city": "City",
  "state": "State",
  "country": "Country",
  "phone": "1234567890",
  "email": "email@example.com"
}
```

**Update Distributor**
```
PUT /distributors/:id
Body: {
  "name": "Updated Name",
  "city": "City",
  "state": "State",
  "country": "Country",
  "phone": "1234567890",
  "email": "email@example.com"
}
```

### Upload

**Upload Document**
```
POST /upload
Content-Type: multipart/form-data
Body:
  - title: string
  - author: string
  - document: file (max 5MB)
```

## Notes

- Semua endpoint kecuali `POST /login` memerlukan authentication session

## Database Schema

**Users**
- id (PK)
- userId (unique)
- password (hashed)

**Beans**
- id (PK)
- name
- description
- price

**DailyBean**
- id (PK)
- bean_id (FK to Beans)
- sale_price
- date

**Distributors**
- id (PK)
- name
- city
- state
- country
- phone
- email

**Upload**
- id (PK)
- title
- document (filename)
- author