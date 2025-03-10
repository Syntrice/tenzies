interface DieProps {
  number: number
  onClick?: () => void
  isHeld: boolean
}

export default function Die({ number, onClick, isHeld }: DieProps) {
  return (
    <button
      onClick={onClick}
      className={
        "flex h-10 w-10 items-center justify-center rounded-lg text-xl shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] transition-colors" +
        (isHeld ? " bg-theme-green-1 hover:bg-theme-green-2" : "bg-white hover:bg-gray-200")
      }
    >
      <b>{number}</b>
    </button>
  )
}
