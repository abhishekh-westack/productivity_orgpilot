
import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { Content } from './components/Content';

// Wrapper to pass params to Content
const ContentWrapper = () => {
  const { phase, submodule } = useParams<{ phase: any; submodule: any }>();
  return <Content phase={phase} submodule={submodule} />;
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/app" element={<Layout />}>
          <Route path=":phase/:submodule" element={<ContentWrapper />} />
          <Route path="" element={<div>Select a phase</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
