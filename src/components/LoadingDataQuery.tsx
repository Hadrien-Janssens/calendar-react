import { Spinner } from './ui/spinner'

export default function LoadingDataQuery() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex justify-center gap-2 items-center">
        <Spinner />
        <p>Chargement...</p>
      </div>
    </div>
  )
}
