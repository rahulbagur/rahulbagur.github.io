import { useEffect, useId, useRef, useState } from "react";
import type { Proof } from "../content";

const srcFor = (file: string) => `${import.meta.env.BASE_URL}proof/${file}`;

const redaction = "Names, emails and domains redacted.";

const ProofFigure = ({
  item,
  onOpen,
}: {
  item: Proof;
  onOpen: (item: Proof) => void;
}) => {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <figure className="proof-figure">
        <div className="proof-slot">
          <p className="proof-slot-label">Proof image not added yet</p>
          <p className="stack">public/proof/{item.file}</p>
        </div>
        <figcaption>
          {item.caption} {redaction}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="proof-figure">
      <button
        type="button"
        className="proof-open"
        onClick={() => onOpen(item)}
      >
        <img
          src={srcFor(item.file)}
          alt={item.alt}
          onError={() => setMissing(true)}
        />
      </button>
      <figcaption>
        {item.caption} {redaction}
      </figcaption>
    </figure>
  );
};

const ProofGallery = ({
  items,
  compact = false,
}: {
  items: Proof[];
  compact?: boolean;
}) => {
  const [open, setOpen] = useState<Proof | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <>
      <div className={compact ? "proof-gallery proof-gallery-compact" : "proof-gallery"}>
        {items.map((item) => (
          <ProofFigure key={item.file} item={item} onOpen={setOpen} />
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="proof-dialog"
        aria-labelledby={titleId}
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(null);
        }}
      >
        {open ? (
          <>
            <div className="proof-dialog-bar">
              <button
                ref={closeRef}
                type="button"
                className="button"
                onClick={() => setOpen(null)}
              >
                Close
              </button>
            </div>
            <img src={srcFor(open.file)} alt={open.alt} />
            <p id={titleId} className="proof-dialog-caption">
              {open.caption} {redaction}
            </p>
          </>
        ) : null}
      </dialog>
    </>
  );
};

export default ProofGallery;
