import React, { useState } from 'react';
import Layout from './components/Layout';
import Threads from './pages/Threads';
import DailySummary from './pages/DailySummary';
import RealTimeInsights from './pages/RealTimeInsights';
import Settings from './pages/Settings';

export type Page = 'threads' | 'daily-summary' | 'real-time-insights' | 'settings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('threads');

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage === 'threads' && <Threads />}
      {currentPage === 'daily-summary' && <DailySummary />}
      {currentPage === 'real-time-insights' && <RealTimeInsights />}
      {currentPage === 'settings' && <Settings />}
    </Layout>
  );
};

export default App;

