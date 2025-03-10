import Button from "../common/Button"
import Die from "../die/Die"
import React from "react"

export default function Main() {

  function generateRandomNumbers(): number[] {
    // This function generates an array of length 10 with random numbers between 1 and 6
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1)
  }

  const [numbers, setNumbers] = React.useState<number[]>(generateRandomNumbers())

  return (
    <main className="bg-theme-light m-10 flex h-screen max-h-90 w-screen max-w-90 flex-col items-center justify-center gap-20 rounded-xl shadow-2xl">
      <div className="grid h-fit w-fit grid-cols-5 grid-rows-2 place-items-center gap-5">
        { numbers.map(n => <Die number={n}/>) }
      </div>
      <div>
        <Button onClick={() => setNumbers(generateRandomNumbers())}>Roll</Button>
      </div>
    </main>
  )
}
