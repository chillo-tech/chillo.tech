import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaChartBar, FaClock, FaHistory, FaRegChartBar, FaRegClock } from 'react-icons/fa';
import ImageDisplay from '../image-display';
import RenderHtmlContent from '../RenderHtmlContent';

function Card({ data }: any) {
  return (
    <div className="hover:shadow-md group bg-white rounded-lg border border-gray-300 h-full">
      <ImageDisplay
        imageClasses="object-cover rounded-t-lg"
        wrapperClasses="relative w-full h-64 object-cover"
        image={data.image}
      />
      <div className="px-3 py-4">
        <p className="grid grid-cols-2 mt-1 text-sm text-gray-400">
          <span className="text-left flex items-center justify-start">
            <FaRegChartBar />
            {(data.niveau_formation === 'DEBUTANT' || data.niveau_formation === 'debutant') && <span className="mx-1">Débutant</span>}
            {(data.niveau_formation === 'INTERMEDIAIRE' || data.niveau_formation === 'intermediare') && <span className="mx-1">Intermediaire</span>}
            {(data.niveau_formation === 'CONFIRME' || data.niveau_formation === 'confirme') && <span className="mx-1">Confirmé</span>}
          </span>
          <span className="text-right flex items-center justify-end">
            <FaRegClock />
            <span className="mx-1">{data.duree}</span>
            heures
          </span>
        </p>
        <div className="py-2">
          <h2 className="text-xl text-gray-700 font-extrabold">{data.titre}</h2>
        </div>
        <p className="mt-1 text-sm text-gray-400 flex justify-between items-center">
          <span>{data.alias}</span>
          <span>{data.duration}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
