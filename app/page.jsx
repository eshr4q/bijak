import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-red-600">به بیجک خوش آمدید</h1>
      <nav className="space-x-4">
        <Link
          href="/map"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          برو به نقشه
        </Link>
        <Link
          href="/form"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          برو به فرم
        </Link>
      </nav>
    </div>
  );
}
