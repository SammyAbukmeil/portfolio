import { MoveUp } from "lucide-react";

export default function Fab() {
  return (
    <a
      className="fixed right-5 md:right-20 bottom-5 md:bottom-20 bg-primary md:bg-transparent p-2 md:p-0 rounded-md"
      href="#"
    >
      <MoveUp className="m-auto" /> Back to top
    </a>
  );
}
