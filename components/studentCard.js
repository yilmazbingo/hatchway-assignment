import { useState } from "react";
import Image from "next/image";
import Grade from "./grade";
import { FcPlus } from "react-icons/fc";
import AddTag from "@components/addTag";
import DisplayTags from "./displayTags";

export default function Card({ student }) {
  if (!student) {
    return null;
  }
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  console.log("student", student);
  console.log("tags", tags);
  const [value, setValue] = useState("");
  const reducer = (previousValue, currentValue) =>
    Number(previousValue) + Number(currentValue);
  const totalGrade =
    student && student.grades && student.grades?.reduce(reducer, 0);
  const lengthOfGrades = student && student.grades && student.grades.length;
  const average = totalGrade / lengthOfGrades;

  const onSubmit = (event) => {
    event.preventDefault();
    setTags((oldArray) => [...oldArray, value]);
    student.tags = [...tags];
    setValue("");
  };
  return (
    <div className="bg-white sm:w-full   rounded-xl  shadow-md overflow-hidden md:max-w-2xl mb-2 w-11/12  ">
      <div className="flex justify-between">
        <h1 className="font-bold ml-4 uppercase  ">
          {" "}
          {student?.firstName} {student?.lastName}{" "}
        </h1>
        <div onClick={() => setOpen(!open)}>
          <FcPlus className=" mr-4 icon " />
        </div>
      </div>
      <div className="flex content-start  h-full">
        <div className="flex-1   ml-0 relative ">
          <Image
            className="bg-gray-400 sm:w-24 flex   rounded-full "
            objectFit="cover"
            src={student?.pic ?? "/studentPlaceholder.jpg"}
            layout="fixed"
            width="220"
            height="220"
            alt={student?.skill}
          />
        </div>
        <div className="flex flex-col p-8 ">
          <div className="pb-1 flex-2 text-left">
            Email:{" "}
            <span className="tracking-wide text-sm text-indigo-500 font-semibold">
              {student?.email}
            </span>
          </div>
          <div className="pb-1 flex-2 text-left">
            Company:{" "}
            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {student?.company}
            </span>
          </div>
          <div className="pb-1 flex-2 text-left">
            Skill:{" "}
            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {student?.skill}
            </span>
          </div>
          <div className="pb-1 flex-2 text-left">
            Average:{" "}
            <span className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {average}
            </span>
          </div>

          {open &&
            student &&
            student.grades &&
            student.grades?.map((grade, index) => (
              <Grade key={index} index={index} grade={grade} />
            ))}

          {tags && <DisplayTags tags={tags} />}

          <AddTag
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onSubmit={(event) => onSubmit(event)}
          />
        </div>
      </div>
    </div>
  );
}
