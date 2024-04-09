import { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Loader from './Loader';

export default function SuspenseLoader({ children, className }) {

  return (
    <Suspense fallback={<Loader />}>
      <ErrorBoundary className={className}>
        {children}
      </ErrorBoundary>
    </Suspense>
  )
}
