# React 19 Features Practice

This repo contains practical examples of the latest features introduced in React 19. Each feature is explored with real-life examples and clear explanation.

---

### 🚀 Covered Features

## 1. `useTransitionDemo`

This demo component showcases how to use React’s `useTransition` hook to handle expensive UI updates without blocking the main thread.

### 🔧 Functionality:
- User types a fruit name into an input field.
- `fruits` state is updated immediately for responsiveness.
- A large list of 1000 items (mocking an expensive operation) is generated and displayed using `setTransition`, so it runs in a non-blocking, deferred manner.
- While the transition is in progress, a `Loading...` indicator is shown via `isPending`.

### 🧠 Purpose:
Demonstrates how `useTransition` improves UI responsiveness by deferring heavy state updates—useful in search, filtering, or live list rendering.

---

## 2. `useOptimisticDemo`

**UseOptimisticDemo.jsx — Handling Optimistic UI with `useOptimistic`**

This component demonstrates the `useOptimistic` hook to improve user experience by instantly reflecting UI updates while waiting for server confirmation.

### 🔧 How it works:
- User inputs a skill and submits it.
- The skill is immediately displayed through optimistic rendering.
- A simulated delay (sleep) represents network latency.
- After server processing, actual data is fetched to ensure consistency.

### 🔍 What it covers:
- `useOptimistic()` for immediate UI updates
- Server request simulation with `fetch()` and `sleep()`
- Controlled input and form handling
- Full re-fetch for consistency after update

---

## 3. `useFormStatusDemo`

**SubmitButton.jsx — Async-Aware Submit Button Using `useFormStatus`**

This component leverages the `useFormStatus()` hook to create a submit button that reacts to the form’s submission state.

### 🔧 How it works:
- `useFormStatus()` tracks the pending state of a `<form>`.
- Button is disabled during submission.
- Button text changes to “Submitting...” when the form is in progress.

### 🚀 Why it matters:
- Prevents double submissions.
- Enhances UX with immediate feedback.
- Integrates smoothly with React Server Actions or form handlers.

---

## 4. `useFormStateDemo`

**FeedBackForm.jsx — React 19 Feedback Form with Validation, Delay & `useFormState`**

This component showcases a feedback form built using `useFormState()` to handle server actions with validation and optimistic UI feedback.

### 🔧 Core Features:
- `useFormState()` handles form submissions and UI updates.
- Validation prevents empty feedback.
- Artificial delay (2s) simulates server processing.
- Submissions sent to `http://localhost:3001/feedbacks` with random ID.

### 📦 Structure:
- `handleSubmit`: Async server function with logic and response.
- Conditional rendering for error/success messages.
- Uses modular `<SubmitButton />` component for UX-friendly loading.

### 🚀 Why it matters:
- Combines validation, loading indicators, and response feedback.
- Demonstrates React 19 concurrent UI and server action patterns.
- Easily extendable to other form types.

---

Each folder is a standalone working demo focused on one feature.

---
