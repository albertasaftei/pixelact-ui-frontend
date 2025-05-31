const Features = () => {
  return (
    <section className="p-16 bg-background border-t-4 border-dashed text-foreground pixel-font grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative md:after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-2xl">Built on shadcn/ui</span>
        <p className="mt-2  text-foreground/50">
          All the power of shadcn's elegant and flexible architecture. Enjoy
          Tailwind-first components and utility props.
        </p>
      </div>

      <div className="relative after:content-[''] md:after:absolute md:after:h-full md:after:top-0 md:after:right-0 md:after:border-r-4 md:after:border-dashed">
        <span className="text-2xl">Pixel Aesthetic</span>
        <p className="mt-2 text-foreground/50">
          Carefully crafted to evoke retro UI vibes while staying modern and
          usable.
        </p>
      </div>
      <div>
        <span className="text-2xl">Composable & Themeable</span>
        <p className="mt-2 text-foreground/50">
          Extend it, customize it, theme it thanks to shadcn's power.
        </p>
      </div>
    </section>
  );
};

export default Features;
