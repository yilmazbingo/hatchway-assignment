export default function AddTag({ value, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="outline-black"
        value={value}
        onChange={onChange}
        placeholder="Add Tag"
      />
    </form>
  );
}
