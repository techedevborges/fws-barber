import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p5">
        <Image src="/logo-dennys.png" height={18} width={120} alt="Dennys Styller"/>
        <Button size="icon" variant="outline">
        <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header;