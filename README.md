## Overview
Task manager application built using NODE JS and MongoDB. It follows a RESTFul API design architecture. The app sends an email notification upon registration and deactivation of the user's account. It's richly built with a simple scientific technique and best practices in the world of API design.

# Features
* Sending Emails
* Authentication and Security
* Sorting, Pagination, and filtering
* Avatar upload

# Try it out
> For a demo check this link https://nnv-task-manager.herokuapp.com

# Getting Started
These instructions will get a copy of the project up and running on your machine for development.

# Requirements
To run this project locally, these following tools should to be installed

Node.js  
npm  
MongoDB  

# Installation
Clone this repository

git clone https://github.com/Nnvedward/task-manager-api.git

Move into the project directory and install its dependencies

npm install

To start the dev API server run this command

npm run dev

Navigate to localhost:3000 to see the API

# Documentation
Setting up Config, Navigate to dev.env file in the root directory and set up the missing environment variables which includes

PORT : This is optional or you can set it to 3000  
MONGODB_URL : Use your local MongoDb url which should like this mongodb://localhost:27017/Database_name   
JWT_SECRET : This could be any value e.g mytaskmanagerapi  
MAILGUN_API_KEY : Signup with [mailgun](www.mailgun.com "mailgun") and get their API key (Optional)

# Registration
Since this API makes use of Authentication, you need to be a registered user before you make CRUD operations to the API

**Signup user**  
Make a post request to :  
/users  
Input the following data:  
name  
email  
password  
age(optional)

**Login user**  
Make a post request to :  
/users/login  
Input the following data:  
email  
password  
A JWT TOKEN will be provided for you in the response. Intially, the API will save the JWT TOKEN in the cookies so you do not have to set it again in the frontend

**Read user**  
Make a get request to:  
/users/me

**Update user**  
Make a get request to:  
/users/me  
Input the following data:  
name(optional)  
email(optional)  
password(optional)  
age(optional)

**delete user**  
Make a delete request to :  
/users/me

**Create task**
Make a post request to :  
/tasks  
Input the following data:  
description  
completed(optional)  
owner(id of the user)

**Read All tasks**
Make a get request to:  
/tasks

**Read A single task**  
Make a get request to:  
/tasks/:id  

**Update tasks**  
Make a patch request to :  
/tasks/:id  
Input the following data:  
description (optional)  
completed(optional)

**Delete task**  
Make a delete request to :  
/tasks/:id

**upload / create avatar**  
Make a post request to :  
/users/me/avatar  
input any of the following avatar file type:  
jpg  
jpeg  
png  

**Read avatar**  
Make a get request to:  
/users/:id/avatar

**Delete avatar**  
Make a delete request to :  
/users/me/avatar