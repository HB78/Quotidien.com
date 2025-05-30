import { ExternalLink } from "lucide-react";
import Link from "next/link";

const LatestVideos = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <div className="bg-blue-900 text-white py-3 px-4">
        <h3 className="font-bold">Dernières vidéos</h3>
      </div>
      <div className="p-4">
        <ul className="space-y-3 text-sm">
          <li>
            <Link href="#" className="flex items-start hover:text-blue-700">
              <ExternalLink
                size={16}
                className="mr-2 mt-0.5 flex-shrink-0 text-blue-700"
              />
              <span>
                La chronique de Youssef Hindi: Privatisation de la Police pour
                combattre les opposants à Israel
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-start hover:text-blue-700">
              <ExternalLink
                size={16}
                className="mr-2 mt-0.5 flex-shrink-0 text-blue-700"
              />
              <span>
                La dernière Revue de Presse avec Olivier Pichon sur TVL
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-start hover:text-blue-700">
              <ExternalLink
                size={16}
                className="mr-2 mt-0.5 flex-shrink-0 text-blue-700"
              />
              <span>
                SPECIAL OR pour 2025 - 2 heures d'entretien avec Idriss Aberkane
              </span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-start hover:text-blue-700">
              <ExternalLink
                size={16}
                className="mr-2 mt-0.5 flex-shrink-0 text-blue-700"
              />
              <span>La Revue de Presse HIVER 2025 avec Dieu(donné)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LatestVideos;
