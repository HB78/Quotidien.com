import Link from "next/link";

const Pagination = () => {
  return (
    <div className="flex justify-center my-8">
      <nav className="inline-flex shadow-sm">
        <Link
          href="#"
          className="relative inline-flex items-center rounded-l-md px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          Précédent
        </Link>
        <Link
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600"
        >
          1
        </Link>
        <Link
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          2
        </Link>
        <Link
          href="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          3
        </Link>
        <Link
          href="#"
          className="relative inline-flex items-center rounded-r-md px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
        >
          Suivant
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
