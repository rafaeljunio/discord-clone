import { Menu } from 'lucide-react'
import React from 'react'

import { NavigationSidebar } from './navigation/navigation-sidebar'
import { ServerSidebar } from './server/server-sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

type Props = {
  serverId: string
}

export const MobileToggle = ({ serverId }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} className="p-0 flex gap-0">
          <Menu className="md:hidden" />
        </Button>
      </SheetTrigger>

      <SheetContent side={'left'} className="p-0 flex gap-0">
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>

        <ServerSidebar serverId={serverId} />
      </SheetContent>
    </Sheet>
  )
}
