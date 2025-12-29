import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;  // Optional link prop
}

export default function FeatureCard({ title, description, image, link }: FeatureCardProps) {
  const cardContent = (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  // If link is provided, wrap in Link component
  if (link) {
    return (
      <Link href={link}>
        {cardContent}
      </Link>
    );
  }

  // Otherwise, return just the card
  return cardContent;
}