import React from 'react';
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Catfact} from './Catfact'; // Ensure this path is correct

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents refetching on window focus
    },
  },
});

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <div className="App">
      <Catfact />
    </div>
  </QueryClientProvider>
)};

export default App;
