import { Menu } from 'lucide-react';
import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { NavigationSidebar } from './navigation/navigation-sidebar';
import { ServerSidebar } from './server/server-sidebar';

type Props = {
  serverId: string
}

export const MobileToggle = ({serverId}: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={'ghost'} className='p-0 flex gap-0'>
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side={'left'} className='p-0 flex gap-0'>
        <div className="w-[72px]">
          <NavigationSidebar />
        </div>

        <ServerSidebar serverId={serverId}/>
      </SheetContent>
    </Sheet>
  );
};
