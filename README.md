# Enrollment System 
a web-based Enrollment/Registration system for parents enrolling their child into the school

------------

### Features
- Can export data to excel file
- After enrolling it will email to the parents email.

### TechStacks
- Laravel (PHP Framework)
- React.JS 
- Typescript
- Inertia.JS
- Tailwind CSS

#### Package and Libraries
- maatwebsite/excel (exporting excel) - Laravel package
- PrimeReact (UI Components) - React package

#### Prerequisites
1. PHP
2. Composer
3. Node
4. Mysql
5. Git

### Installation
1. Install all the Prerequisites mentioned above.
2.  Clone this repository `https://github.com/taler-hash/Enrollment-System.git`.
3. After cloning the repository go to the cloned directory `Enrollment-System`.
4. Download the [.env file](https://drive.google.com/file/d/1Jb64_joIJwCVDAmxlbpIPHpfrof8Uvd8/view?usp=sharing ".env")
5. After downloading the file cut or copy the downloaded file `.env` and put in the Enrollment-System directory  
6. After that start the Mysql and PHP
7. Open any Mysql GUI and add connection 
- hostname: `127.0.0.1` 
- port: `3306`
- username: `root`
8. After successfully adding connection join to that created connection and create schema and name it `enrollmentdb`.
9. Once you created schema Open terminal from the directory `Enrollment-System` and run `npm run build`. 
10. In the same terminal run this `php artisan migrate:fresh` to migrate.
11. In the same terminal run this `php artisan db:seed` to seed the admin user.
12. In the same terminal run this `php artisan serve` to start the application.
12. Access `localhost:8000` to see if the application is working.

### Credentials for Admin
- username: admin
- password: admin

### Application Paths
- /enrollment - ( for enrolling students )
- /login - ( login for admin )
- /students - ( students lists for admin user only)

### Frontend directory
- resources/js

#### Rough Sketch of the plan
[Plan](https://drive.google.com/file/d/1zTiarVlTNGO3gRcQ6Q-EnvvBzf3U9s6j/view?usp=sharing "Rough Sketch Plan")

### PS
- Developer: Jurie Tylier Pedrogas
- Developed Time: 10hrs
