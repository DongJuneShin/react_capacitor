import Link from "next/link";

export default function ToolbarContent() {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="block p-4 hover:text-[#afafaf]">메인</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="block p-4 hover:text-[#afafaf]">어바웃</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="block p-4 hover:text-[#afafaf]">연락처</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}