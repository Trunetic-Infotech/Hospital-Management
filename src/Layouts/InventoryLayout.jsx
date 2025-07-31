
import React from 'react'
import Header from '../Components/Header'
import { InventoryMenu } from '../constants/SidebarMenu'
import Sidebar from '../Components/Sidebar'

function InventoryLayout({children}) {
  return (
    <div className="flex h-screen gap-5 p-3">
      <div className="w-[15%]  bg-[#0F766E] rounded-2xl shadow-lg ">
        <Sidebar sidebarItems={InventoryMenu} />
      </div>

      <div className="flex flex-col gap-5">
        <div className="h-[10%]  bg-[#EFECEC] rounded-2xl shadow-md p-2 flex items-center justify-between">
          <Header />
        </div>
        <main className="flex-1 h-[70%] w-[85vw]  bg-[#EFECEC] rounded-2xl gap-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default InventoryLayout