import { Combobox } from "@/components/ui/ComboBox"

export default function Home() {
  return (
   <main>
    <nav className="flex text-white items-center p-4 py-8 justify-between h-[5vw] bg-gray-600 w-screen top-0 sticky">
      <div className=" w-[8vw]">Malik ↗</div>
      <Combobox />
      <div className=" text-end w-[8vw]">hi</div>
    </nav>
    <div>Aniamted COunter</div>
   </main>
  )
}
