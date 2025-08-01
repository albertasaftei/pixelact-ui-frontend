import { PixelButton, PixelInput, PixelLabel } from "pixelact-ui";

const ComponentsShowcase = () => {
  return (
    <section className=" border-t-4 border-dashed text-foreground pixel-font p-8 md:p-12 xl:p-24">
      <div className="text-2xl mb-8 md:text-center">Components showcase</div>
      <div className="flex flex-wrap gap-12 md:gap-4">
        <div className="w-full md:w-fit flex-1 p-4  border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Login</h4>
          <div>
            <PixelLabel
              htmlFor="username"
              className="text-foreground leading-normal"
            >
              Username
            </PixelLabel>
            <PixelInput
              id="username"
              className="w-full"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <PixelLabel
              htmlFor="password"
              className="text-foreground leading-normal"
            >
              Password
            </PixelLabel>
            <PixelInput
              id="password"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <PixelButton>Login</PixelButton>
        </div>
        <div className="flex-1 p-4 w-fit  border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Register</h4>
          <div>
            <PixelLabel
              htmlFor="email"
              className="text-foreground leading-normal"
            >
              Email
            </PixelLabel>
            <PixelInput
              id="email"
              type="email"
              className="w-full"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <PixelLabel
              htmlFor="password"
              className="text-foreground leading-normal"
            >
              Password
            </PixelLabel>
            <PixelInput
              id="password"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <div>
            <PixelLabel
              htmlFor="confirmPassword"
              className="text-foreground leading-normal"
            >
              Confirm password
            </PixelLabel>
            <PixelInput
              id="confirmPassword"
              type="password"
              className="w-full"
              placeholder="••••••••••"
            />
          </div>
          <div>
            <PixelLabel
              htmlFor="dateOfBirth"
              className="text-foreground leading-normal"
            >
              Date of birth
            </PixelLabel>
            <PixelInput type="date" className="w-full" id="dateOfBirth" />
          </div>
          <div className="flex items-center gap-4">
            <PixelInput
              type="checkbox"
              className="p-2 bg-foreground text-background"
            />
            <span className="text-foreground text-sm">
              Accept terms and conditions
            </span>
          </div>
          <PixelButton>Register</PixelButton>
        </div>
        <div className="flex-1 p-4 w-fit border-4 border-dashed flex flex-col gap-4">
          <h4 className="text-xl mb-4 text-center">Button</h4>
          <PixelButton>Default</PixelButton>
          <PixelButton variant="destructive">Destructive</PixelButton>
          <PixelButton variant="warning">Warning</PixelButton>
          <PixelButton variant="success">Success</PixelButton>
          <PixelButton variant="link">Link</PixelButton>
        </div>
      </div>
    </section>
  );
};

export default ComponentsShowcase;
