interface DieProps {
  number: number
  onClick?: () => void
}

export default function Die({ number, onClick }: DieProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-xl shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] transition-colors hover:bg-gray-200"
    >
      <b>{number}</b>
    </button>
  )
}
