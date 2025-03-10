interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-theme-purple-4 hover:bg-theme-purple-5 text-theme-light rounded-xl px-4 py-2 transition-colors">
      {children}
    </button>
  )
}
