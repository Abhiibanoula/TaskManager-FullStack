# TaskManager-FullStack
Task Manager
This is a full-stack task manager application built using Node.js, Express.js, MongoDB, and React.js.

Features
Add Task: Users can add new tasks with a title and description.
View Tasks: Users can view all tasks and their details.
Update Task: Users can update the status of tasks (e.g., completed or pending).
Delete Task: Users can delete tasks from the list.
Technologies Used
Backend:
Node.js
Express.js
MongoDB with Mongoose for database management
HTTP Status Codes for API responses
Frontend:
React.js
Axios for API requests
React Router for navigation
Other Tools:
npm for package management
ESLint and Prettier for code linting and formatting
Git and GitHub for version control and hosting
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/task-manager.git
Install dependencies:

bash
Copy code
cd task-manager
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=3001
MONGO_URI=mongodb://localhost:27017/taskmanager
Replace mongodb://localhost:27017/taskmanager with your MongoDB connection string.

Start the server:

bash
Copy code
npm start
This will start the server at http://localhost:3001.

Start the client (React):

Open a new terminal window and navigate to the client directory:

bash
Copy code
cd client
npm install
npm start
This will start the React development server at http://localhost:3000.

Access the application:

Open your web browser and go to http://localhost:3000 to access the task manager application.

API Endpoints
GET /api/v1/tasks: Get all tasks
POST /api/v1/tasks: Add a new task
PUT /api/v1/tasks/
: Update a task by ID
DELETE /api/v1/tasks/
: Delete a task by ID
Contributing
Contributions are welcome! Please follow the contribution guidelines before submitting pull requests.
