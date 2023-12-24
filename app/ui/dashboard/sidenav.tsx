import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import logoWhite from '@/app/assets/tt-logo-white.png'
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';



export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-1 py-1 md:px-1">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 md-40 text-center"
        href="/"
      >
        <Image src={logoWhite} alt='Logo' />

      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form action="#" method="POST">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-red-500" />
            <div className="hidden md:block text-red-400" >Sair</div>
          </button>
        </form>
      </div>
    </div>
  );
}
