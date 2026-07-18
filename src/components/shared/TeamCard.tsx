import Image from "next/image";

/** Team / volunteer member card: photo on a green panel with name and role. */
export function TeamCard({
  name,
  role,
  image,
  featured = false,
}: {
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}) {
  return (
    <article className={`overflow-hidden rounded-3xl bg-green-700 p-3 ${featured ? "mx-auto w-full max-w-sm" : ""}`}>
      <div
        className={`relative overflow-hidden rounded-2xl ${featured ? "aspect-[3/4]" : "aspect-[391/360]"}`}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes={featured ? "(max-width:1024px) 100vw, 500px" : "(max-width:1024px) 100vw, 400px"}
          priority={featured}
        />
      </div>
      <div className="flex min-h-[4.5rem] flex-col justify-center rounded-2xl bg-white px-5 py-4">
        <h3 className={`font-sans font-bold text-ink ${featured ? "text-xl" : "text-lg"}`}>{name}</h3>
        <p className="text-sm text-green-600">{role}</p>
      </div>
    </article>
  );
}
