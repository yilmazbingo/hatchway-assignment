export default function SearchBar({
  searchType,
  name,
  value,
  onChange,
  onKeyPress,
}) {
  console.log("value", value);
  return (
    <input
      onKeyPress={onKeyPress}
      className=" sm:w-auto mt-2 lg:w-96 placeholder-green-500 mb-2 "
      type="text"
      placeholder={`Search By ${searchType}`}
      onChange={(event) => onChange(event)}
      name={name}
      value={value}
    />
  );
}
