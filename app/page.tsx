"use client"

import { SearchIcon } from "lucide-react"
import Header from "./_components/ui/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Victor</h2>
        <p>Sexta-feira, 28 de março de 2026</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..."/>
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-37.5 mt-6">
          <Image src="/banner-dennys.png" alt="Agende nos melhores com Dennys Styller" className="object-cover rounded-xl" fill/>
        </div>
      </div>
    </div>
  )
}

export default Home