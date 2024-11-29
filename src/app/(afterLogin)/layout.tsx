import Link from "next/link";

export default function AfterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   const handelLogout = () => {};
  return (
    <>
      <nav
        data-testid={"test"}
        className="w-full min-w-[375px] z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400"
      >
        <div className="w-full min-w-min flex items-center justify-between mt-0 px-6 py-2">
          <div className="flex items-center w-full order-3 md:order-1 text-blue-700">
            <Link href="/employee">
              <button className="text-xs md:text-base bg-green-400 text-white  p-2 rounded  hover:bg-green-300 hover:text-gray-100">
                See All the Employees
              </button>
            </Link>
          </div>
          <div className="order-3 flex flex-wrap items-center justify-end mr-4">
            <div className="flex items-center w-full md:w-full">
              <Link href="/employee/add">
                <button className="text-xs md:text-base bg-green-400 text-white mr-4 p-2 rounded  hover:bg-green-300 hover:text-gray-100">
                  Add New
                </button>
              </Link>
              <Link href="/">
                <button
                  className="text-xs md:text-base bg-blue-600 text-white  p-2 rounded  hover:bg-blue-500 hover:text-gray-100"
                  //   onClick={() => handelLogout()}
                >
                  Log out
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
}