export default function ErreurDataQuery() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col justify-center gap-2 items-center">
        <p>Erreur lors du chargement des événements.</p>
        <p>Vérifiez votre connection internet, ou réessayer plus tard.</p>
      </div>
    </div>
  )
}
