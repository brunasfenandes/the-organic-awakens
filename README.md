# Project Title

The Organic Awakens

## Overview

The Organic Awakens is an interactive educational tool designed to enhance users' understanding of organic chemistry concepts, including naming compounds, identifying functional groups, and understanding reaction mechanisms through engaging gameplay.

### Problem Space

Many students find organic chemistry concepts challenging, leading to a lack of motivation and understanding. Traditional learning methods can be tedious, making it difficult for students to retain important information. This game aims to make learning organic chemistry enjoyable and effective by offering a fun platform for quizzes and interactive learning.

### User Profile

- Students: High school and college students studying organic chemistry who want to improve their knowledge and test their understanding.

- Educators: Teachers looking for supplementary materials to help students grasp organic chemistry concepts.

### Features

- Quiz Mode:

  - As a user, I want to take multiple-choice quizzes on naming organic compounds, identifying functional groups, and predicting reaction outcomes.
  - As a user, I want to choose between high-school level and college-level quizzes.
  - As a user, I want to see a succinct explanation for both correct and incorrect answers.

- Flashcard Mode:

  - As a user, I want to study key organic chemistry terms and concepts through digital flashcards, with each card including examples of reactions and structures.
  - As a user, I want to see related questions to the content on the flashcards.

- Interactive Molecule Visualizer:
  - As a user, I want to visualize organic molecules in a 3D interactive tool.
  - As a user, I want to have information about the molecules, including functional groups and properties.

## Implementation

### Tech Stack

- React
- JavaScript XML
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
  - JSmol.js and react-molviewer for molecule visualization.
- Server libraries:
  - knex
  - express

### APIs

- No external APIs will be used for the initial version, but local data will be stored in a JSON file.

### Sitemap

- Home Page: Introduction and navigation to game modes.
- Quiz Mode: Multiple-choice questions.
- Flashcard Mode: Interactive flashcards for studying.
- Molecule Visualizer: Interactive tool for visualizing molecules.

### Mockups

#### Home Page

![](HomePage.png)

#### About Page

![](About.png)

#### Flashcards Page

![](Flashcards.png)

#### Quiz Page

![](Quiz-Question.png)

#### React-MolViewer Page

![](React-MolViewer.png)

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

### Endpoints

**GET /questions**

- Retrieves a list of questions.

Response:

```
[
  {
    "id": 1,
    "question": "What is the name of the compound?",
    "options": ["Option A", "Option B", "Option C"],
    "correctAnswer": "Option A"
  }
  ...
]
```

**GET /flashcards**

- Retrieves a list of flashcards containing questions.

Response:

```
[
  {
    "id": 1,
    "topic": "Functional Groups",
    "content": "A functional group is what we call specific groupings of certain atoms within molecules that have their own characteristic properties. Here are some of the most commonly encountered functional groups..."
  }
  ...
]
```

## Roadmap

- Create client

  - Set up a React project with routes and basic pages

- Create server

  - Set up an Express server with routing and placeholder 200 responses

- Create migrations

- Compile a list of organic chemistry questions (10-15) covering naming compounds and identifying functional groups.

- Create seeds with sample questions and answers.

- Implement molecule visualization

  - Integrate JSmol.js and react-molviewer into the React project

- Develop user interface

  - Create pages for instructions, questions, and score display

- Feature: Scoring system

  - Implement a scoring system to track user performance

- Feature: User feedback

  - Create a feedback form for users to submit their thoughts on the tool

- Feature: Flashcard endpoints

  - Create GET /flashcards endpoint to retrieve flashcards.
  - Create GET /flashcards/:id endpoint to retrieve a specific flashcard by ID.
  - Create GET /flashcards/qtn endpoint to retrieve questions associated with a specific flashcard.

- Feature: Endpoints

  - Create GET /questions endpoint to retrieve question objects.
  - Create GET /questions/:id endpoint to retrieve a question by its ID.
  - Create GET /answers endpoint to retrieve answers associated with questions.

- Bug fixes

  - Test the application and fix any identified bugs

- Prepare for presentation
  -Finalize the project for submission on October 27
  - Create a demo for the presentation on November 1

---

## Future Implementations

- Challenge Mode: Timed quiz interface.

- Implement user registrations/login

- Implement progress tracking for quiz results.

- Simple interactive molecule builder.
