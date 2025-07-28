# 🎬 React Movies Catalog App

This is a personal training project built with **React + TypeScript + Vite**, designed to help me learn, experiment, and revisit essential React concepts and tools. The app fetches movie data from an external API and allows users to search and favorite movies.

---

## 🛠️ Main Concepts & Tools Practiced

This project covers a wide range of core React techniques, including:

- **🧠 useState**
  - Manage component state for search queries, loading flags, error messages, and movie lists.
  
- **📡 useEffect**
  - Side effects for API requests and local storage synchronization.

- **🌐 useContext**
  - Global state for managing the list of favorite movies across components.

- **🛣️ Routing with BrowserRouter**
  - Setup client-side routing using react-router-dom.

- **📥 API Integration (fetch)**
  - Communicate with TheMovieDB API (or similar), including popular and search endpoints.

- **⚛️ JSX / TSX**
  - Component-based UI with strongly typed props and state.

- **🔁 Conditional Rendering**
  - Dynamically show loading indicators, error messages, or movie cards depending on the app state.

- **💾 Local Storage**
  - Persist favorite movies even after a page reload.

- **🧯 Error Handling**
  - Gracefully handle API failures and edge cases.

---

## 🚀 Getting Started

### 📦 Install dependencies:

```bash
npm install
```

### ▶️ Start the app:
```bash
npm run dev
```

### 📂 Project Structure
```bash
src/
├── components/       # Reusable UI components like MovieCard
├── contexts/         # MovieContext for global state
├── css/              # Component-specific CSS files
├── Interfaces/       # TypeScript interfaces for movies
├── pages/            # Main pages like Home
├── services/         # API call functio
```
### 📚 Purpose
This project is not intended for production use. It serves as a learning playground and quick consultation guide for key React topics whenever I need a refresh.
Credits of the base/early project to: https://www.youtube.com/watch?v=G6D9cBaLViA&t=5295s&ab_channel=TechWithTim

