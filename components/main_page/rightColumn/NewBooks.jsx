import septSeptSept from "@/public/books/777.jpg";
import blythe from "@/public/books/blythe_masther.jpg";
import crise2008 from "@/public/books/crise_2008.jpg";
import Image from "next/image";
import Link from "next/link";

const NewBooks = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-blue-900 text-white py-3 px-4">
        <h3 className="font-bold">Livres</h3>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex">
          <div className="relative w-20 h-28 mr-3">
            <Image
              src={crise2008}
              alt="Livre 2008"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm">2008, L'année du krach</h4>
            <p className="text-xs text-gray-600 mt-1">
              La crise financière expliquée en détail et ses conséquences sur
              l'économie mondiale.
            </p>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-2 inline-block"
            >
              Commander →
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="relative w-20 h-28 mr-3">
            <Image
              src={septSeptSept}
              alt="Livre 777"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm">777, La chute du Vatican</h4>
            <p className="text-xs text-gray-600 mt-1">
              Une analyse des structures financières et économiques du Vatican.
            </p>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-2 inline-block"
            >
              Commander →
            </Link>
          </div>
        </div>

        <div className="flex">
          <div className="relative w-20 h-28 mr-3">
            <Image
              src={blythe}
              alt="Livre Blythe Masters"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm">Blythe Masters</h4>
            <p className="text-xs text-gray-600 mt-1">
              L'histoire de la banquière qui a inventé les produits dérivés.
            </p>
            <Link
              href="#"
              className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-2 inline-block"
            >
              Commander →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
