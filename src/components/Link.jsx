
import { Link } from "react-router-dom";


export default function LinkTag({
  url,
  target,
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      to={target ? { pathname: url } : url}
      rel="noopener noreferrer"
      target={target && "_blank"}
      className={className}
      disabled={true}
      {...props}
    >
      {children}
    </Link>
  );
}
