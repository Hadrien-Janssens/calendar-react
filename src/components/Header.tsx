import Nav from './Nav'

export default function Header() {
  return (
    <div className="h-screen bg-gray-100">
      <Nav />
      <div className="flex justify-center items-center h-full">
        <p>Header</p>
      </div>
    </div>
  )
}
