import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import store from '@/store';
import './globals.css'
import App from './App.tsx'

const container = document.getElementById('root')!;

if (container) {
  const root = createRoot(container);

  // TODO: provider component
  root.render(
    <Provider store={store}>
      <StrictMode>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </StrictMode>
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}