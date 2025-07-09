import { ImageIcon, XCircleIcon } from "lucide-react";

function ImagePreview({
  url,
  onRemove,
}: {
  url: string | null;
  onRemove: () => void;
}) {
  return (
    <div className="relative aspect-square">
      <button
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
        type="button"
      >
        {url ? (
          <XCircleIcon
            className="absolute top-0 right-0 translate-x-1/2 z-20 -translate-y-1/2 size-7 fill-primary text-primary-foreground"
            onClick={onRemove}
          />
        ) : (
          <></>
        )}
      </button>
      <img
        src={url ? url : undefined}
        alt=""
        className={`z-0 border border-border h-full w-full max-w-50 rounded-md object-cover ${
          url ? "block" : "hidden"
        }`}
      />
      <ImageIcon
        className={`size-40 ${
          url ? "hidden" : "block"
        } border-dashed border-2 cursor-pointer`}
        strokeWidth={1.25}
      />
    </div>
  );
}

export default ImagePreview;
