import Link from "next/link";
import Separator from "@/components/Separator";

interface SidebarItemsProps {
  routeHistory: { name: string; pathname: string }[] | undefined;
}

const SidebarItems = ({ routeHistory }: SidebarItemsProps) => {
  return (
    <div className="sticky">
      <div className="w-full h-full flex flex-col justify-start items-center gap-24">
        <div className="flex flex-col justify-start items-center gap-6">
          <Link href="/storage/general">
            <p className="font-medium text-2xl">Storage</p>
          </Link>
          <Separator width={140} />
          <Link href="/storage/general" className="text-sm font-normal">
            general
          </Link>
        
          <Link href="/topics">
            <p className="font-medium text-2xl">Topics</p>
          </Link>
          <Separator width={140} />
          {/* TODO change this depending on route */}
          {routeHistory &&
            routeHistory.map(({ name, pathname }) => (
              <Link href={pathname} className="text-sm font-normal">
                {name}
              </Link>
            ))}
        </div>
        <div className="flex flex-col justify-start items-center gap-6">
          <Link href="/solutions" className="font-medium text-2xl">
            Solutions
          </Link>
          <Separator width={140} />
          {/* TODO change this depending on route */}
          <p className="text-sm font-normal">The use of calloc</p>
          <p className="text-sm font-normal">The use of malloc</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarItems;
