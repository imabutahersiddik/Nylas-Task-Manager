# Nylas Task Manager

A task management assistant that uses Nylas APIs and AI to extract action items from meeting notes and create tasks automatically.

### Usage Scenarios

#### 1. **Automated Task Creation from Meeting Notes**
   - Users can input their meeting notes into the app, and it will automatically extract action items and create tasks. This saves time and ensures that important tasks are not overlooked.

#### 2. **Integration with Calendar Services**
   - The app can create calendar events in Google Calendar or other integrated services for each task created. This helps users keep track of deadlines and manage their schedules effectively.

#### 3. **Real-time Notifications**
   - Users receive instant notifications in Slack and Microsoft Teams when new tasks are created. This ensures that team members are always informed about their responsibilities and deadlines.

#### 4. **Task Prioritization**
   - Users can prioritize tasks based on urgency or importance. The app can be extended to include features for setting due dates and reminders, helping users focus on what matters most.

#### 5. **Seamless Collaboration**
   - Team members can collaborate by sharing meeting notes and tasks. The app can facilitate discussions around specific tasks, ensuring everyone is on the same page.

#### 6. **AI-Powered Insights**
   - The app leverages AI to analyze meeting notes and suggest actionable items. This feature can help users identify key points and improve productivity by focusing on critical tasks.

#### 7. **Customizable Task Management**
   - Users can customize task attributes such as titles, descriptions, and due dates. This flexibility allows teams to adapt the app to their specific workflows and requirements.

#### 8. **Centralized Task Overview**
   - Users can view all their tasks in one place, making it easier to manage workloads and track progress. This centralization helps in maintaining organization and efficiency.

#### 9. **Integration with Existing Tools**
   - The app can integrate with other task management tools, allowing users to sync tasks across platforms. This ensures that users can work with their preferred tools without losing functionality.

#### 10. **User Authentication and Security**
   - The app includes user authentication features to ensure that sensitive information, such as meeting notes and tasks, is securely managed. This is crucial for maintaining privacy and data integrity.

### Example Usage

To use the Nylas Task Manager app, follow these steps:

1. **Start the Application**: Run the command `npm start` to launch the server.
2. **Send Meeting Notes**: Use a tool like Postman to send a POST request to `http://localhost:3000/create-tasks` with a JSON body containing your meeting notes:
   ```json
   {
       "meetingNotes": "Discuss project timeline and assign tasks to team members."
   }
   ```
3. **Receive Notifications**: Check your Slack or Teams channel for notifications about the newly created tasks.
4. **Review Calendar Events**: Open your calendar to see the scheduled events corresponding to your tasks.

## Getting Started

### Prerequisites

- Node.js
- Nylas account and API keys
- Access to an AI model for action item extraction
- Access to a task management tool API
- Slack and Microsoft Teams webhook URLs

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nylas-task-manager.git
   cd nylas-task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file in the root directory and add your Nylas, AI model, Slack, and Teams credentials.

### Running the App

Start the server:
```bash
npm start
```

### API Endpoint

- **POST /create-tasks**: Accepts meeting notes and creates tasks based on extracted action items.

### Example POST Requests

#### 1. **Create Tasks from Meeting Notes**
This request allows users to create tasks based on their meeting notes.

```bash
curl -X POST http://localhost:3000/create-tasks \
-H "Content-Type: application/json" \
-d '{
    "meetingNotes": "Discuss project timeline and assign tasks to team members."
}'
```

#### 2. **Create Multiple Tasks**
You can send multiple meeting notes in a single request to create several tasks at once.

```bash
curl -X POST http://localhost:3000/create-tasks \
-H "Content-Type: application/json" \
-d '{
    "meetingNotes": "1. Finalize project scope. 2. Assign roles to team members. 3. Set deadlines for deliverables."
}'
```

#### 3. **Create Tasks with Specific Details**
If you want to include additional details in your request, you can structure your JSON accordingly. For example, you might want to specify due dates or priority levels (assuming your app supports these features).

```bash
curl -X POST http://localhost:3000/create-tasks \
-H "Content-Type: application/json" \
-d '{
    "meetingNotes": "Prepare presentation for the upcoming client meeting.",
    "taskDetails": {
        "dueDate": "2024-08-30T10:00:00Z",
        "priority": "high"
    }
}'
```

#### 4. **Send Meeting Notes with Action Items**
If your app allows for the direct input of action items, you can send them as part of the request.

```bash
curl -X POST http://localhost:3000/create-tasks \
-H "Content-Type: application/json" \
-d '{
    "meetingNotes": "Discuss marketing strategy.",
    "actionItems": [
        {
            "title": "Research target audience",
            "description": "Use analytics tools to gather data.",
            "dueDate": "2024-09-05T17:00:00Z"
        },
        {
            "title": "Prepare marketing plan draft",
            "description": "Outline the main strategies and tactics.",
            "dueDate": "2024-09-10T12:00:00Z"
        }
    ]
}'
```

#### 5. **Error Handling in Requests**
Users should be aware of how to handle errors when sending requests. For example, if the meeting notes are missing, the server should respond with an error message.

```bash
curl -X POST http://localhost:3000/create-tasks \
-H "Content-Type: application/json" \
-d '{
    "meetingNotes": ""
}'
```
**Expected Response:**
```json
{
    "error": "Failed to create tasks"
}
```

## Final Steps

1. **Install Dependencies**: Run `npm install` to install all required packages.
2. **Run the Application**: Use `npm start` to start your server.
3. **Test the API**: Use a tool like Postman to send a POST request to `http://localhost:3000/create-tasks` with a JSON body containing `meetingNotes`.

```json
{
    "meetingNotes": "Discuss project timeline and assign tasks to team members."
}
```

### License

This project is licensed under the MIT License.
