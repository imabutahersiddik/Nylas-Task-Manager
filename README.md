# Nylas Task Manager

A task management assistant that uses Nylas APIs and AI to extract action items from meeting notes and create tasks automatically.

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
   git clone https://github.com/imabutahersiddik/nylas-task-manager.git
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

### CLI Usage

The Nylas Task Manager provides a command-line interface (CLI) for interacting with the application. Here are the available CLI commands:

1. **Create tasks from meeting notes**:
   ```bash
   npm run create-tasks -- --notes "Discuss project timeline and assign tasks to team members."
   ```
   This command allows you to create tasks based on the provided meeting notes.

2. **Create multiple tasks**:
   ```bash
   npm run create-tasks -- --notes "1. Finalize project scope. 2. Assign roles to team members. 3. Set deadlines for deliverables."
   ```
   You can send multiple meeting notes in a single command to create several tasks at once.

3. **Create tasks with specific details**:
   ```bash
   npm run create-tasks -- --notes "Prepare presentation for the upcoming client meeting." --dueDate "2024-08-30T10:00:00Z" --priority "high"
   ```
   If you want to include additional details in your request, you can specify them using command-line arguments.

4. **Send meeting notes with action items**:
   ```bash
   npm run create-tasks -- --notes "Discuss marketing strategy." --actionItems.0.title "Research target audience" --actionItems.0.description "Use analytics tools to gather data." --actionItems.0.dueDate "2024-09-05T17:00:00Z" --actionItems.1.title "Prepare marketing plan draft" --actionItems.1.description "Outline the main strategies and tactics." --actionItems.1.dueDate "2024-09-10T12:00:00Z"
   ```
   If your app allows for the direct input of action items, you can send them as command-line arguments.

5. **Fetch analytics data**:
   ```bash
   npm run analytics
   ```
   This command retrieves analytics data, such as task completion rates and productivity trends.

### API Endpoint Usage

- **POST /api/create-tasks**: Accepts meeting notes and creates tasks based on extracted action items.
- **GET /api/analytics**: Retrieves analytics data for task completion rates and productivity trends.

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

### License

This project is licensed under the MIT License.