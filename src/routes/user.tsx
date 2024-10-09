import { createFileRoute, Link } from "@tanstack/react-router";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export const Route = createFileRoute("/user")({
  component: () => {
    const [show, setShow] = useState(true);

    const hideForm = () => {
      setShow(!show);
    };

    return (
      <main className="container mx-auto grid min-h-dvh w-full place-items-center">
        <form
          className={`${show ? "hidden" : "flex"} w-full flex-col gap-4 px-4 transition-all duration-300 ease-in-out lg:max-w-md`}
        >
          <div className="grid place-items-center gap-2">
            <h2 className="text-center text-3xl font-semibold">Sign in</h2>
            <div className="h-[1px] w-12 rounded-sm bg-slate-600"></div>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button color="dark" size="sm" type="submit">
            Submit
          </Button>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-sm font-medium">Don't have an account </p>
            <span
              className="cursor-pointer font-semibold underline"
              onClick={hideForm}
            >
              Sign Up
            </span>
          </div>
        </form>

        <form
          className={`${show ? "flex" : "hidden"} w-full flex-col gap-4 px-4 transition-all duration-300 ease-in-out lg:max-w-md`}
        >
          <div className="grid place-items-center gap-2">
            <h2 className="text-center text-3xl font-semibold">
              Create your account
            </h2>
            <div className="h-[1px] w-12 rounded-sm bg-slate-600"></div>
          </div>
          <div>
            <div className="block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@email.com"
              required
              shadow
            />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="password2" value="Your password" />
            </div>
            <TextInput id="password2" type="password" required shadow />
          </div>
          <div>
            <div className="block">
              <Label htmlFor="repeat-password" value="Repeat password" />
            </div>
            <TextInput id="repeat-password" type="password" required shadow />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link
                href="#"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button color="dark" size="sm" type="submit">
            Register new account
          </Button>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-sm font-medium">Already have an account </p>
            <span
              className="cursor-pointer font-semibold underline"
              onClick={hideForm}
            >
              Sign In
            </span>
          </div>
        </form>
      </main>
    );
  },
});
