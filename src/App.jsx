import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import AppLayout from '@/components/layout/AppLayout';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';
import SubmitPrayer from '@/pages/SubmitPrayer';
import PrayerWall from '@/pages/PrayerWall';
import ShareTestimony from '@/pages/ShareTestimony';
import AnsweredPrayers from '@/pages/AnsweredPrayers';
import PrayerTopics from '@/pages/PrayerTopics';
import Encouragement from '@/pages/Encouragement';
import About from '@/pages/About';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="/submit-prayer" element={<ErrorBoundary><SubmitPrayer /></ErrorBoundary>} />
          <Route path="/prayer-wall" element={<ErrorBoundary><PrayerWall /></ErrorBoundary>} />
          <Route path="/testimonies" element={<ErrorBoundary><AnsweredPrayers /></ErrorBoundary>} />
          <Route path="/share-testimony" element={<ErrorBoundary><ShareTestimony /></ErrorBoundary>} />
          <Route path="/answered-prayers" element={<ErrorBoundary><AnsweredPrayers /></ErrorBoundary>} />
          <Route path="/prayer-topics" element={<ErrorBoundary><PrayerTopics /></ErrorBoundary>} />
          <Route path="/encouragement" element={<ErrorBoundary><Encouragement /></ErrorBoundary>} />
          <Route path="/about" element={<ErrorBoundary><About /></ErrorBoundary>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ErrorBoundary>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App