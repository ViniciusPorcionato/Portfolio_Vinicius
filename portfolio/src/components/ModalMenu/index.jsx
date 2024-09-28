
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import { MenuSquareIcon } from "hugeicons-react";
import {  SocialMediaModal } from "../SocialMedia";

  export const ModalMenu = () => {
    return (
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <MenuSquareIcon 
            size={50} 
            color={"#011126"}
            variant={"stroke"}
        />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <h1>TESTE</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 w-[100%] flex justify-around items-center">
                <SocialMediaModal/>
            </div>
          </div>
         </SheetContent>
      </Sheet>
    )
  }