import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { routes } from "@/utils";
import { PixelButton } from "pixelact-ui";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-background text-foreground">
      <section className={`relative p-12 md:py-24 overflow-hidden`}>
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
          {/* <pre className="bg-background border-2 border-dashed border-foreground p-6 md:w-fit">
              <code className="font-bold">
                <span className="text-foreground">
                  <span className="text-foreground">$</span> npm install
                </span>
                <span className="text-yellow-700 dark:text-yellow-500 ml-2">
                  pixelact-ui
                </span>
              </code>
            </pre> */}
        </div>
      </section>

      <section className="p-12 bg-background border-t-4 border-dashed text-foreground grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="features-col after:content-[''] after:absolute after:h-full after:top-0 after:right-0 after:border-r-4 after:border-dashed">
          <h3 className="text-xl font-semibold">Built on shadcn/ui</h3>
          <p className="mt-2  text-foreground/50">
            All the power of shadcn's elegant and flexible architecture. Enjoy
            Tailwind-first components and utility props.
          </p>
        </div>

        <div className="features-col after:content-[''] after:absolute after:h-full after:top-0 after:right-0 after:border-r-4 after:border-dashed">
          <h3 className="text-xl font-semibold">Pixel Aesthetic</h3>
          <p className="mt-2 text-foreground/50">
            Carefully crafted to evoke retro UI vibes while staying modern and
            usable.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Composable & Themeable</h3>
          <p className="mt-2 text-foreground/50">
            Extend it, customize it, theme it thanks to shadcn's power.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
