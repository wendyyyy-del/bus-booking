export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
