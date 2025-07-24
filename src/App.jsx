import { useState } from 'react';
import UseTransitionDemo from './components/UseTransitionDemo';
import UseOptimisticDemo from './components/UseOptimisicDemo';



export default function App() {
  const [feature, setFeature] = useState('useTransition');

  const renderFeature = () => {
    switch (feature) {
      case 'useTransition': return <UseTransitionDemo />;
      case 'useOptimistic': return <UseOptimisticDemo />;
      default: return <p>Select a feature to preview.</p>;
    }
  };

  return (
    <div>
      <h1>React 19 Features Playground</h1>
      <select value={feature} onChange={(e) => setFeature(e.target.value)}>
        <option value="useTransition">useTransition</option>
        <option value="useOptimistic">useOptimistic</option>
        <option value="useActionState">useActionState</option>
        <option value="useFormStatus">useFormStatus</option>
      </select>

      <hr />
      {renderFeature()}
    </div>
  );
}
