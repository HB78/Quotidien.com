import jovanovic from "@/public/jovanovic.jpg";
import { Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AutorInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 mr-4">
            <Image
              src={jovanovic}
              alt="Pierre Jovanovic"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">Pierre Jovanovic</h3>
            <p className="text-sm text-gray-600">Journaliste économique</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 mb-4">
          "J'ai commencé cette revue de presse le 20 février 2008 à cause de la
          Société Générale qui a utilisé Jérôme Kerviel pour dissimuler ses
          pertes apocalyptiques dues aux subprimes..."
        </p>
        <div className="text-center">
          <Link
            href="contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            <Coffee size={16} className="mr-1" />
            Soutenir cette revue de presse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutorInfo;
