# Enrollment System 
a web-based Enrollment/Registration system for parents enrolling their child into the school

------------



### TechStacks
- Laravel (PHP Framework)
- React.JS 
- Typescript
- Inertia.JS

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
4. Download the env file `https://drive.google.com/file/d/1Jb64_joIJwCVDAmxlbpIPHpfrof8Uvd8/view?usp=sharing`
5. After downloading the file cut or copy the downloaded file `.env` and put in the Enrollment-System directory  
6. Open terminal from the directory `Enrollment-System` and run `npm run build`.
7.  After that start the Mysql and PHP and in the same terminal run `php artisan serve`
8. Access `localhost:8000` to see if the application is working.

### Application Paths
- /enrollment - ( for enrolling students )
- /login - ( login for admin )
- /students - ( students lists for admin user only)

#### Rough Sketch of the plan
[Plan](https://drive.google.com/file/d/1zTiarVlTNGO3gRcQ6Q-EnvvBzf3U9s6j/view?usp=sharing "Rough Sketch Plan")
