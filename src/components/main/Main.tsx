import Button from "../common/Button"
import Die from "../die/Die"
import React from "react"
import Confetti from "react-confetti"

interface DieData {
  id: number
  number: number
  isHeld: boolean
}

export default function Main() {
  const [dice, setDice] = React.useState<DieData[]>(generateNewDice())
  const isWin = React.useMemo(() => checkIfWin(), [dice])
  const playAgainButton = React.useRef<HTMLButtonElement | null>(null)

  // Select play again button on win
  React.useEffect(() => {
    if (isWin) {
      playAgainButton.current?.focus()
    }
  }, [isWin])

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  function generateNewDice(): DieData[] {
    // This function generates an array of length 10 with random numbers between 1 and 6

    let idCount = 0
    return Array.from({ length: 10 }, () => {
      return {
        number: generateRandomNumber(),
        isHeld: false,
        id: idCount++,
      }
    })
  }

  function checkIfWin(): boolean {
    const diceValues = new Set<number>() // need to keep track of unique values

    for (const die of dice) {
      if (!die.isHeld) return false // return false if any die is not held - shortcircuit
      diceValues.add(die.number) // add to set
    }

    return diceValues.size === 1 // should only be 1 unique value in the set if all dice are the same
  }

  function playAgain() {
    setDice(generateNewDice())
  }

  function rollDice() {
    setDice((prev) =>
      prev.map((d) => {
        return d.isHeld ? d : { ...d, number: generateRandomNumber() }
      }),
    )
  }

  function holdDie(id: number) {
    setDice((prev) => {
      return prev.map((n) => {
        return n.id === id ? { ...n, isHeld: !n.isHeld } : n
      })
    })
  }

  return (
    <main className="bg-theme-light m-10 flex h-screen max-h-90 w-screen max-w-90 flex-col items-center justify-center gap-8 rounded-xl p-10 shadow-[10px_10px_3px_0px_rgba(255,255,255,0.25)] max-[35rem]:max-h-200 max-[35rem]:h-fit">
      {isWin && <Confetti />}
      <div aria-live="polite" className="hidden">
        {isWin && <p>"You won! Press 'Play Again' to start a new game."</p>}
      </div>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid h-fit w-fit grid-cols-5 grid-rows-2 place-items-center gap-5">
        {dice.map((d) => (
          <Die
            onClick={() => holdDie(d.id)}
            key={d.id}
            number={d.number}
            isHeld={d.isHeld}
            isDisabled={isWin} // disable dice from being pressed when game is won
          />
        ))}
      </div>
      <div>
        {!isWin ? (
          <Button ariaLabel="Roll all dice" onClick={rollDice}>
            Roll
          </Button>
        ) : (
          <Button
            ref={playAgainButton}
            ariaLabel="Play again"
            onClick={playAgain}
          >
            Play Again
          </Button>
        )}
      </div>
    </main>
  )
}
