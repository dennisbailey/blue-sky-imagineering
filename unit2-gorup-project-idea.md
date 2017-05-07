# Proposal
## Lina and Dennis | Self-Assessment Tracker

## What It Is
A tool for speeding up the feedback loop and between students and instructors. Students will be able to rate all aspects of the learning experience. Instructors will have timely, specific feedback.

## Who It's For
* Students
* Instructors

## How It Works
Students can self-asses how they feel about lectures, class assignments, homework, and projects.

Instructors can get an overview of how students are feeling faster than a bi-weekly feedback.

Instructors/Admins can add assessments and schedule their release to the class

## Minimum Viable Product
Create the feedback tool for one class.

## Data Necessary
* List of students
* List of instructors
* Assignments (We'll use Unit 2 assignments as seed data)

## Tables
* users (id, firstname, lastname, email, instructor_flag, admin_flag)
* assignment_types (in-class, homework, project…)
* assignments (id, name, type, instructor, link, assignment date, assessment date, date created, date modified)
* student_reviews (id, user_id, assignment_id, rating, date created, date modified)
* feedback (assignment_id, student_id, feedback)

## Feedback
* Lectures
	* I did not attend 
	* I'm completely lost
	* I'm getting there
	* I got it
* Homework
	* I didn't do it
	* I started it, but need some help
	* I finished it, but I have some questions
	* I nailed it
* Projects
	* I didn't do it
	* I started it, but need some help
	* I finished it, but I have some questions
	* I nailed it
* Breakouts
	* 	I did not attend 
	* I'm completely lost
	* I'm getting there
	* I got it

## Routes
* / 
	* /home
		* GET
	* /register
		* GET
		* POST
	* /login
		* GET 
		* POST
* /students
	* /
		* GET
		* POST
* /instructors
	* /
		* GET
		* POST
* /assignments
	* /
		* GET
	* /new
		* GET
		* POST
	* /edit
		* GET
		* POST

## Pages
* Home | (Some kind of welcome page)
* Login | (Users can login)
* Register | (signup with email or oauth) 
* Student | (Shows all incomplete assessments and students can only see their page)
* Student > History | (Shows all assessments)
* Instructor | (Shows an overview of student feedback)
* Assignments | (Shows all assignments with links and some filters (date, type, etc))
* Assignments > New | (Instructors can add new assignments and schedule their release)
* Assignments > Edit | (Instructors can add new assignments and schedule their release)

## Stretch Goals
* Allow users to change passwords
* Instructors can create accounts for multiple students with one form
* Multiple cohorts of students

## Technologies & Tools
* CRUD
    * Allow users to create, read, update, and delete data from a form
    * Interact with a server-side

* HTML
    * It will be semantic and pass [validation](https://validator.w3.org/nu/)

* CSS
    * We will leverage Bootstrap and explore bootswatch
    * We will use at least one web font

* JavaScript
    * We will run the [linter](http://www.javascriptlint.com/online_lint.php), and use excellent variable names
    * Split code into separate files where appropriate
    * Optionally, use a test-driven development approach

* Workflow
    * Use wireframes to create your layouts before you build them
    * Use a feature-branch workflow for your user stories
    * Squash commits and issue pull requests rather merging directly to master

* Our API will
    * Use express.js
    * Have routes for create, read, update, and delete operations on multiple routes
    * Be designed according to RESTful principles
    * CRUD data from/to a relational database using SQL or an ORM

* Auth
    * Support functionality for three role types:
        * A non-logged in user
        * A logged-in user with limited permissions (students)
        * A logged-in superuser (instructors)
    * Support login via a social network
    * Passwords should be hashed
    * Use signed Cookies

* Database
    * Use PostgreSQL
    * Be normalized to 3rd Normal Form
    * Be seeded with data

* Workflow
    * Use a feature-branch workflow for your user stories
    * Use an automated tool (such as Gulp) to build, deploy, and test your project
    * Document dependencies in a `package.json` file
    * Write well formatted and sensible commits; issue pull requests rather merging directly to master 