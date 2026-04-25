import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, price, category, image, description }: ProductCardProps) => (
  <div className="rounded-3xl border border-[#c2a97a] mb-8 md:mb-10">
    {/* Golden outer border */}

    <div className="m-[4px] rounded-3xl">
      {/* Transparent gap */}

      <Link
        to={`/products/${id}`}
        className="block bg-[#0f2218] rounded-3xl overflow-hidden  
        ring-1 ring-[#1f3d2b]/80 
        transition-all duration-300"
      >
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground font-body text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        <div className="p-5">
          <h3 className="font-heading text-lg text-[#c2a97a] mb-1">
            {name}
          </h3>

          <p className="font-body text-sm text-[#c2a97a]/80 mb-3 line-clamp-2">
            {description}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default ProductCard;