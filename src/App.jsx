import { lazy, Suspense, useEffect, useState } from 'react'
import { sectionIds } from './data/siteData'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useSectionHash } from './hooks/useSectionHash'
import { useHashRoute } from './hooks/useHashRoute'
import { FitnessProvider, useFitness } from './context/FitnessContext'
import { loadExercises } from './services/exerciseService'
import Header from './components/Header'
import SectionDivider from './components/SectionDivider'
import Footer from './components/Footer'
import Toast from './components/Toast'
import StartWorkoutModal from './components/StartWorkoutModal'
import SessionResumeBanner from './components/SessionResumeBanner'
import MobileNav from './components/MobileNav'
import DashboardShell from './components/dashboard/DashboardShell'
import DashboardSidebar from './components/dashboard/DashboardSidebar'
import './App.css'
import './styles/dashboard.css'
import './styles/mobile.css'
import './styles/evoluafit-logo.css'

const HowItWorks = lazy(() => import('./components/HowItWorks'))
const MyWorkouts = lazy(() => import('./components/MyWorkouts'))
const WorkoutPlanner = lazy(() => import('./components/WorkoutPlanner'))
const CoachIA = lazy(() => import('./components/CoachIA'))
const ExerciseLibrary = lazy(() => import('./components/ExerciseLibrary'))
const ExerciseDetailPage = lazy(() => import('./components/ExerciseDetailPage'))
const TrainingCalendar = lazy(() => import('./components/TrainingCalendar'))
const PerformanceDashboard = lazy(() => import('./components/PerformanceDashboard'))
const Goals = lazy(() => import('./components/Goals'))
const UserProfile = lazy(() => import('./components/UserProfile'))

function SectionFallback({ label = 'Carregando' }) {
  return (
    <div className="section-lazy-fallback" role="status" aria-live="polite">
      <span className="section-lazy-fallback__pulse" aria-hidden="true" />
      <span>{label}...</span>
    </div>
  )
}

function AppContent() {
  const activeSection = useScrollSpy(sectionIds)
  useSectionHash(sectionIds)
  const { toasts, profile, history, workouts } = useFitness()
  const { page, id: exerciseId } = useHashRoute()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileMenuOpen])

  return (
    <div
      className={`app app--saas${sidebarCollapsed ? ' app--sidebar-collapsed' : ''}${
        mobileMenuOpen ? ' app--drawer-open' : ''
      }`}
    >
      <div className="app__frame">
        <DashboardSidebar
          activeSection={activeSection}
          profile={profile}
          history={history}
          workouts={workouts}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((v) => !v)}
          mobileOpen={mobileMenuOpen}
          onCloseMobile={() => setMobileMenuOpen(false)}
        />

        <div className="app__content">
          <Header
            activeSection={activeSection}
            onOpenDashboardMenu={() => setMobileMenuOpen(true)}
          />
          <main>
            <SessionResumeBanner />
            <DashboardShell />
            <Suspense fallback={<SectionFallback label="Carregando conteúdo" />}>
              <HowItWorks />
              <SectionDivider variant="workouts" label="TREINOS" />
              <MyWorkouts />
              <WorkoutPlanner />
              <SectionDivider variant="coach" label="COACH IA" />
              <CoachIA />
              <ExerciseLibrary />
              <SectionDivider variant="calendar" label="CALENDÁRIO" />
              <TrainingCalendar />
              <SectionDivider variant="progress" label="EVOLUÇÃO" />
              <PerformanceDashboard />
              <Goals />
              <SectionDivider variant="profile" label="PERFIL" />
              <UserProfile />
              <Footer />
            </Suspense>
          </main>
        </div>
      </div>

      <Toast toasts={toasts} />
      <StartWorkoutModal />
      <MobileNav activeSection={activeSection} />
      {page === 'exercise' && exerciseId && (
        <Suspense fallback={<SectionFallback label="Carregando exercício" />}>
          <ExerciseDetailPage exerciseId={exerciseId} />
        </Suspense>
      )}
    </div>
  )
}

function App() {
  useEffect(() => {
    loadExercises()
  }, [])

  return (
    <FitnessProvider>
      <AppContent />
    </FitnessProvider>
  )
}

export default App