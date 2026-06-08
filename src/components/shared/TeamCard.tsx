import Image from "next/image";

/** Team / volunteer member card: photo on a green panel with name and role. */
export function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl bg-green-700 p-3">
      <div className="relative aspect-[391/360] overflow-hidden rounded-2xl">
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width:1024px) 100vw, 400px" />
      </div>
      <div className="rounded-2xl bg-white px-5 py-4">
        <h3 className="font-sans text-lg font-bold text-ink">{name}</h3>
        <p className="text-sm text-green-600">{role}</p>
      </div>
    </article>
  );
}
