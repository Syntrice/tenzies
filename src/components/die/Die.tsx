interface DieProps {
  number: number
  onClick?: () => void
  isHeld?: boolean
  isDisabled?: boolean
}

export default function Die({ number, onClick, isHeld, isDisabled}: DieProps) {
  return (
    <button
      onClick={isDisabled ? undefined : onClick}
      className={
        "max-[35rem]:h-8 max-[35rem]:w-8 flex h-10 w-10 items-center justify-center rounded-lg text-xl shadow-[0px_3px_5px_0px_rgba(0,0,0,0.3)] transition-colors" +
        (isHeld ? " bg-theme-green-1 hover:bg-theme-green-2" : "bg-white hover:bg-gray-200")
      }
      aria-label={`Die with a value of ${number}. It is currently ${isHeld ? "held" : "not held"}.`}
      aria-pressed={isHeld}
      aria-disabled={isDisabled}
    >
      <b>{number}</b>
    </button>
  )
}
