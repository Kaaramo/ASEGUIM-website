import { Pill } from "@/components/ui/Pill";

export default function NotFound() {
  return (
    <section className="px-3 py-3">
      <div className="grid min-h-[70vh] place-items-center overflow-hidden rounded-[2rem] bg-ink text-center">
        <div className="container-careloop py-20">
          <p className="font-display text-[clamp(6rem,20vw,16rem)] leading-none text-cream">404</p>
          <h1 className="mt-2 font-display text-4xl text-cream sm:text-5xl">Page introuvable</h1>
          <p className="mx-auto mt-5 max-w-md text-cream/75">
            La page que vous cherchez a été déplacée ou n'existe pas. Revenons à l'essentiel.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Pill href="/" variant="orange" size="lg" arrow>
              Retour à l'accueil
            </Pill>
            <Pill href="/adhesion" variant="cream" size="lg">
              Adhérer
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}
