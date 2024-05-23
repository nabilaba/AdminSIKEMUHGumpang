import { useTokenStore } from "../helpers/Auth";

export default function Protected({ children }) {
  const token = useTokenStore((state) => state.token);

  if (!token) {
    return <div>Not Authorized</div>;
  }

  return children;
}
