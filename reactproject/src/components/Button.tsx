
interface ButtonProps {
  color: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
  children: String;
  onClick: () => void;
}

const Button = ({color = "primary", children , onClick }: ButtonProps) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
    // <button type="button" className="btn btn-secondary">
    //   {children}
    // </button>
    // <button type="button" className="btn btn-success">
    //   {children}
    // </button>
    // <button type="button" className="btn btn-danger">
    //   {children}
    // </button>
    // <button type="button" className="btn btn-warning">
    // {children}
    // </button>
    // <button type="button" className="btn btn-info">
    // {children}
    // </button>
    // <button type="button" className="btn btn-light">
    // {children}
    // </button>
    // <button type="button" className="btn btn-dark">
    // {children}
    // </button>
    // <button type="button" className="btn btn-link">
    // {children}
    // </button>
  );
};

export default Button;
