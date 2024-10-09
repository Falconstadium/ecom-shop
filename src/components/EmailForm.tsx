import { TextInput } from "flowbite-react";

const EmailForm = () => {
  return (
    <form className="container mt-16 grid place-content-center place-items-center gap-3">
      <h2 className="text-xl font-semibold capitalize">
        Subscribe to our newsletter
      </h2>
      <div className="flex items-center justify-center gap-3">
        <TextInput
          id="email1"
          type="email"
          placeholder="your_name@email.com"
          className="lg:w-[500px]"
          required
        />
        <button className="rounded bg-rose px-4 py-2 text-xs font-medium uppercase tracking-wide text-light transition-colors duration-300 ease-in-out hover:bg-pink-600 lg:text-sm">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default EmailForm;
