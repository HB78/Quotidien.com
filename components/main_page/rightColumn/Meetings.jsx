import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const Meetings = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-blue-900 text-white py-3 px-4">
        <h3 className="font-bold">Prochaines rencontres</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-700" />
            <span className="font-semibold mr-2">31 mai 2025:</span>
            <span>MOISELLES (95)</span>
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-700" />
            <span className="font-semibold mr-2">7 juin 2025:</span>
            <span>PARIS</span>
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-700" />
            <span className="font-semibold mr-2">14 juin 2025:</span>
            <span>BEZIERS</span>
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-700" />
            <span className="font-semibold mr-2">21 juin 2025:</span>
            <span>LA ROCHELLE - LAGORD</span>
          </li>
          <li className="flex items-center">
            <Calendar size={16} className="mr-2 text-blue-700" />
            <span className="font-semibold mr-2">28 juin 2025:</span>
            <span>PARIS</span>
          </li>
        </ul>
        <div className="mt-3 text-center">
          <Link
            href="/rendez-vous"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Voir toutes les dates
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
