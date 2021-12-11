export default function Grade({ index, grade }) {
  console.log("grade", grade);
  return (
    <div>
      Test {index + 1}: <span> {grade} </span>
    </div>
  );
}
