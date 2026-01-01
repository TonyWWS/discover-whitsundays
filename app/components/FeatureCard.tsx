import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  isImageUrl?: boolean; // New prop to distinguish between emoji and URL
}

export default function FeatureCard({ title, description, image, link, isImageUrl = false }: FeatureCardProps) {
  const cardContent = (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full cursor-pointer transform hover:-translate-y-1 border-b-4 border-coral">
      {isImageUrl ? (
        // Real image
        <div
          className="h-48 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="h-full bg-gradient-to-br from-navy/40 to-transparent"></div>
        </div>
      ) : (
        // Emoji placeholder
        <div className="h-48 bg-gradient-to-br from-coral/10 via-sand/10 to-ocean/10 flex items-center justify-center">
          <span className="text-7xl">{image}</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold text-navy mb-3">{title}</h3>
        <p className="font-body text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}