import React from "react";

interface Props {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ImageLightbox: React.FC<Props> = ({ images, index, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">×</button>

      <button onClick={onPrev} className="absolute left-4 text-white text-3xl">‹</button>
      <img
        src={images[index]}
        className="max-w-[95%] max-h-[90%] object-contain rounded-xl"
      />
      <button onClick={onNext} className="absolute right-4 text-white text-3xl">›</button>
    </div>
  );
};

export default ImageLightbox;
