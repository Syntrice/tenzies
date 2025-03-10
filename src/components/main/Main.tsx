import Die from "../die/Die"

export default function Main() {
  return (
    <main className="bg-theme-light m-10 flex h-screen max-h-[200px] w-screen max-w-[400px] flex-col items-center justify-center rounded-xl shadow-2xl">
      <div className="grid h-fit w-fit grid-cols-5 grid-rows-2 place-items-center gap-5">
        <Die number={1} />
        <Die number={2} />
        <Die number={3} />
        <Die number={4} />
        <Die number={5} />
        <Die number={6} />
        <Die number={5} />
        <Die number={4} />
        <Die number={3} />
        <Die number={2} />
      </div>
    </main>
  )
}
