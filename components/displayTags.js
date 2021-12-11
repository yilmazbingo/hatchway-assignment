export default function Tags({ tags }) {
  return (
    <div className="flex justify-start">
      {tags?.map((tag, index) => (
        <span className="bg-gray-400 mr-2 mb-2" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
}
