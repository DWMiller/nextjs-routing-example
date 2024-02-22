import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return (
    <main className="flex-1 grid gap-12 items-start lg:grid-cols-2 lg:items-center lg:gap-20 p-4 lg:p-12">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="grid gap-2">
          <Link
            className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400"
            href="#"
          >
            Some Home Page
          </Link>
          <h1 className="text-4xl font-bold tracking-tighter">
            For Some Website
          </h1>
        </div>
      </div>
    </main>
  );
}
