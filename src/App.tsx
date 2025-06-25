import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <main className="min-h-screen bg-gray-950 text-white py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">HaidaM-Task Manager App</h1>

      {/* Task Manager Interface */}
      <TaskList />

  
      <footer className="mt-12 text-center text-sm text-gray-400">
        <hr className="border-gray-700 mb-4 mt-8 w-full" />
        <p>&copy; {new Date().getFullYear()} Haida Makouangou. All rights reserved.</p>
         <p className="mt-1">Built with ❤️ using React, TypeScript, Tailwind CSS & Vite</p>
      </footer>
    </main>
  );
}

export default App;
