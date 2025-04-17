import DestinationCard from '@/components/destinationCard/DestinationCard';

export default function Home() {
    return (
        <main>
            <DestinationCard
                image="/images/paris_destination_card_image.avif"
                name="Paris"
                price="R$ 3.200"
                evaluation={5}
            />
        </main>
    );
}