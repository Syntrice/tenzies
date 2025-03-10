import Button from "../common/Button"
import Die from "../die/Die"
import React from "react"

interface DieData {
  id: number
  number: number
  isHeld: boolean
}

export default function Main() {

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

  const [dice, setDice] = React.useState<DieData[]>(generateNewDice())

  function rollDice() {
    setDice(prev => prev.map((d) => {return {...d, number: generateRandomNumber()}}))
  }

  function holdDie(id: number) {
    setDice((prev) => {
      return prev.map((n) => {
        return n.id === id ? { ...n, isHeld: !n.isHeld } : n
      })
    })
  }

  return (
    <main className="bg-theme-light m-10 flex h-screen max-h-90 w-screen max-w-90 flex-col items-center justify-center gap-8 rounded-xl p-10 shadow-[10px_10px_3px_0px_rgba(255,255,255,0.25)]">
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
          />
        ))}
      </div>
      <div>
        <Button onClick={rollDice}>Roll</Button>
      </div>
    </main>
  )
}
