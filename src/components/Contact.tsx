import { Button, Label, Textarea, TextInput } from "flowbite-react";

const Contact = () => {
  return (
    <form className="container mx-auto flex w-full flex-col justify-center gap-4 px-4 md:max-w-md">
      <div>
        <div className="mb-2 block">
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
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required
          rows={3}
        />
      </div>
      <Button color="blue">Submit</Button>
    </form>
  );
};

export default Contact;
