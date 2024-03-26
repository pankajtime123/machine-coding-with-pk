import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {routes.map((item, index)=>{
        return (<Link href={item.route}  key={index.toString()}>
        <div> {item.title}</div>
        </Link>)
      })}
    </main>
  )
}
