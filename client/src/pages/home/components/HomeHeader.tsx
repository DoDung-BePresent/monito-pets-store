import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#FCEED5] to-[#FFE7BA]">
      <div className="absolute top-[-280px] left-[40px] z-0 h-[635px] w-[635px] -translate-x-1/4 -translate-y-1/2 rotate-12 rounded-[99px] bg-[#F7DBA7] overflow-hidden" />
      <div className="relative z-10 container mx-auto flex items-center justify-between gap-13 py-4">
        <Logo />
        <nav className="flex-1 items-center space-x-8">
          <Link
            to="#"
            className="font-semibold text-[#003459] hover:text-[#003459]/80"
          >
            Home
          </Link>
          <Link
            to="#"
            className="font-semibold text-[#003459] hover:text-[#003459]/80"
          >
            Category
          </Link>
          <Link
            to="#"
            className="font-semibold text-[#003459] hover:text-[#003459]/80"
          >
            About
          </Link>
          <Link
            to="#"
            className="font-semibold text-[#003459] hover:text-[#003459]/80"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="flex items-center rounded-md bg-white px-3">
            <SearchIcon className="text-muted-foreground size-5" />
            <Input
              className="placeholder:text-muted-foreground/50 border-none bg-transparent shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0"
              placeholder="Search something here!"
            />
          </div>
          <Button className="bg-[#003459] hover:bg-[#003459]/90">
            Join the community
          </Button>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
