import { useRef, useState } from 'react';
import { Camera } from 'lucide-react';

interface EditableImageProps {
  src: string;
  alt: string;
  onChange: (imageData: string) => void;
  className?: string;
}

export const EditableImage = ({ src, alt, onChange, className }: EditableImageProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHover, setIsHover] = useState(false);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validar que sea una imagen
      if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido');
        return;
      }

      // Validar tamaño (máximo 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('La imagen es muy grande. Por favor selecciona una imagen menor a 2MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer transition-all duration-200 ${className}`}
        onClick={handleImageClick}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        title="Click para cambiar foto"
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay con icono de cámara */}
        {isHover && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full transition-opacity">
            <Camera className="w-8 h-8 text-white" />
          </div>
        )}
      </div>

      {/* Input file oculto */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};