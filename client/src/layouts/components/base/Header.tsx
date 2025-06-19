import { Link } from 'react-router-dom';
import { Search, Circle, Menu } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[white] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {['Home', 'Category', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-[16px] leading-[24px] font-semibold text-[#003459] hover:text-[#003459]/80"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side: Search + CTA + Currency */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden items-center rounded-md bg-white px-3 py-1 md:flex">
            <Search className="text-muted-foreground mr-2 size-4" />
            <Input
              className="w-[160px] border-none p-0 text-sm shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search something here!"
            />
          </div>

          {/* Join Button */}
          <Button className="hidden rounded-full bg-[#003459] px-5 text-sm font-semibold text-white hover:bg-[#003459]/90 md:inline-flex">
            Join the community
          </Button>

          {/* Currency Select */}
          <Select defaultValue="vnd">
            <SelectTrigger className="w-[90px] justify-between rounded-full border border-gray-300 px-3 py-1 text-sm font-semibold text-[#003459]">
              <div className="flex items-center gap-1">
                <Circle className="size-3 fill-red-600 text-red-600" />
                <SelectValue placeholder="VND" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vnd">VND</SelectItem>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-5 text-[#003459]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {['Home', 'Category', 'About', 'Contact'].map((item) => (
                  <DropdownMenuItem key={item}>
                    <Link to="#" className="w-full text-sm text-[#003459]">
                      {item}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Button className="mt-2 w-full rounded-full bg-[#003459] text-white">
                    Join the community
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
