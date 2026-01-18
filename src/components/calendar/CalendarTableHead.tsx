export default function CalendarTableHead() {
  return (
    <thead>
      <tr>
        {['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'].map((d) => (
          <th key={d} className=" p-2 text-sm text-gray-600">
            {d}
          </th>
        ))}
      </tr>
    </thead>
  )
}
