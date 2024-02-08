import { Gothic_A1 } from "next/font/google";
import CursorBlend from "./components/CursorBlend";
const gothic_a1 = Gothic_A1({subsets: ["latin"], weight: ["900"]})


export default function page() {
  return (
    <div className={`${gothic_a1.className}`}><CursorBlend /></div>
  )
}
