import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Loader from '../common/Loader';

const Home = lazy(() => import('../pages/home/Home'));
const NoPage = lazy(() => import('../common/NoPage'));
const LanguageSwitcher = lazy(() => import('../i18n/LanguageSwitcher'));
const Technologies = lazy(() => import('../pages/technologies/Technologies'));
const Projects = lazy(() => import('../pages/projects/Projects'));

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="languages" element={<LanguageSwitcher />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
