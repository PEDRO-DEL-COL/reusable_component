import React from "react";
import Image from "next/image";

interface DestinationCardProps {
    image:string;
    name: string;
    price: string;
    evaluation: number;
}

const DestinationCard = ({image, name, price, evaluation}: DestinationCardProps) => {
    return (
        <div className="relative w-[300] h-[350] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
            <Image
                src={image}
                alt={`Image of ${name}`}
                layout="fill"
                objectFit="cover"
                className="brightness-75"/>
            <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                <h2 className="text-2xl font-semibold drop-shadow-md">{name}</h2>
                <p className="text-lg drop-shadow-sm">{price}</p>
                <p className="text-lg drop-shadow-sm">{evaluation} ★</p>
            </div>
        </div>
    );
};

export default DestinationCard;