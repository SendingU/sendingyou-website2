
export function Button({ children, variant = 'primary', ...props }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const styles = {
    primary: base + " bg-red-600 hover:bg-red-700",
    secondary: base + " bg-white text-black hover:bg-gray-100",
  };
  return <button className={styles[variant]} {...props}>{children}</button>;
}
