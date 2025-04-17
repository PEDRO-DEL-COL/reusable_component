import React from "react";
import Image from "next/image";

interface DestinationCardProps {
    image:string;
    name: string;
    price: string;
    evaluation: number;
    description: string;
}

const DestinationCard = ({image, name, price, evaluation, description}: DestinationCardProps) => {
    return (
        <div className="relative group w-full h-[350] rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl">
                <Image
                    src={image}
                    alt={`Image of ${name}`}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"/>
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition">
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white z-10">
  
                <div className="transition-all duration-500 ease-in-out transform translate-y-1 group-hover:translate-y-0">
                    <h2 className="text-2xl font-semibold drop-shadow-md">{name}</h2>
                    <p className="text-lg drop-shadow-sm">{price}</p>
                    <p className="text-lg drop-shadow-sm">{evaluation} ★</p>
                </div>
                <p className="text-sm italic opacity-0 max-h-0 overflow-hidden transform translate-y-2 group-hover:opacity-100 group-hover:max-h-40 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default DestinationCard;