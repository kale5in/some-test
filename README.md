# Job Application Email Generator

A React-based project designed to generate personalized emails for job applications.

[Demo](https://kale5in.github.io/some-test/)

## Getting Started

- Clone the repository
- Install dependencies:
   ```bash
   npm install
   ```
- Run the development server:
   ```bash
   npm run dev
   ```
   
---
## Features

- **Dashboard View**: Displays a list of generated emails with a motivational banner encouraging users to create at least five emails.
- **Email Generation Form**: A dedicated form for generating new cover letters using AI-generated content.
- **State Persistence**: Stores generated emails locally within the browser to ensure they are restored upon revisiting the application.
- **Responsive Design**: Includes a mobile-friendly interface created independently.
---

## Project Structure by FSD

This project follows a minimalistic interpretation of the Feature-Sliced Design (FSD) architecture, ensuring clear separation of concerns and scalability.

```plaintext
├── app/
|   ├── styles
|   ├── routes
|   ├── .....
|   # Application composition layer
|   # Contains only abstract initialization logic
|   # Does not include any slices
|
├── pages/
|   # Slices implementing complete views for the application
|   ├── mails
|   |   ├── SomePage
|
├── entities/
|   # Slices implementing business blocks in terms of application business logic
|   ├── mails
|
├── shared/
|   ├── ui
|   ├── lib
|   ├── some other shared modules
|   # Abstract segments layer
|   # No business blocks or business-related logic allowed here
