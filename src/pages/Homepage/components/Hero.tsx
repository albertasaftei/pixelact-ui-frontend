import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { routes } from "@/utils";
import { useNavigate } from "react-router-dom";
import { PixelButton } from "pixelact-ui";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={`relative p-16 md:py-24 overflow-hidden`}>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        strokeDasharray={5}
        duration={5}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[150%] skew-y-12",
          "md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <span className="text-foreground text-3xl lg:text-5xl border-dashed border-b-4">
        Pixelact UI
      </span>
      <p className="mt-4 max-w-2xl text-foreground/50 ">
        A pixel-flavored React component library built on top of
        <span className="border-b-4 border-dashed ml-4">shadcn/ui</span>.
        <br />
        Glitchy. Retro. Accessible.
      </p>
      <div className="mt-6 flex max-sm:flex-col gap-6">
        <PixelButton
          className="min-w-full md:min-w-fit"
          onClick={() => navigate(routes.docs.installation)}
        >
          Get Started
        </PixelButton>
        <PixelButton
          className="min-w-full md:min-w-fit"
          onClick={() => navigate(routes.docs.introduction)}
        >
          Documentation
        </PixelButton>
      </div>
    </section>
  );
};

export default Hero;
