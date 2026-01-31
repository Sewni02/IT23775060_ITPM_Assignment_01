##  Project Overview

This project evaluates the **accuracy, stability, and usability** of the Singlish-to-Sinhala transliteration system available at [SwiftTranslator.com](https://www.swifttranslator.com/).

###  Objectives

- Identify **24+ positive scenarios** where the system correctly converts Singlish to Sinhala

- Identify **10+ negative scenarios** where the system fails or produces incorrect conversions

- Test **UI behavior** including real-time updates during typing

- Automate all test scenarios using **Playwright**

- Document results using the provided test case template



##  Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **Git** (for cloning the repository)
- **Web browser** (Chromium, Firefox, or WebKit)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sewni02/IT23775060_ITPM_Assignment_01.git
   cd IT23775060_ITPM-Assignment_01


## Install dependencies

npm install


## Install Playwright browsers

npx playwright install


## Running Tests
npx playwright test


 Test Coverage Categories
The tests cover all required categories from the assignment:

## Positive Functional Tests (24+ Scenarios)
Sentence Structures (Simple, Compound, Complex)

Interrogative & Imperative Forms

Positive vs Negative Sentences

Daily Language Usage (Greetings, Requests, Responses)

Polite vs Informal Phrasing

Word Combinations & Phrase Patterns

Grammatical Forms (Tense, Negation, Pronouns)

Input Length Variation (Short, Medium, Long)

Mixed Language Content (Singlish + English)

Punctuation & Text Formatting

Informal Language & Slang

##  Negative Functional Tests (10+ Scenarios)
Unsupported symbols and mixed-case input

Improperly joined words or missing spaces

Incorrect tense or slang handling

Edge cases with punctuation

Mixed English word failures


