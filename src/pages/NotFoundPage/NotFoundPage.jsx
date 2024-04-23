// === Lib modules ===
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <h1>Тут нічого немає. I am NotFoundPage</h1>
      <NavLink to="/">Go Home</NavLink>
    </>
  );
}
