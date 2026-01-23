export default function Legend() {
  return (
    <div className="flex gap-5 text-xs p-3 justify-center">
      <div className="flex gap-4">
        <div className="flex gap-0.5 items-center">
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          <p>Libre</p>
        </div>
        <div className="flex gap-0.5 items-center">
          <div className="w-3 h-3 bg-amber-200 rounded-full"></div>
          <p>Moyen</p>
        </div>
        <div className="flex gap-0.5 items-center">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <p>Chargé</p>
        </div>
        <div className="flex gap-0.5 items-center">
          <div className="w-3 h-3 bg-red-800 rounded-full"></div>
          <p>Complet</p>
        </div>
      </div>
    </div>
  )
}
