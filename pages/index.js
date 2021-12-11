import { useState } from "react";
import axios from "axios";
import StudentCard from "@components/studentCard";
import SearchBar from "@components/searchBar";
import Footer from "@components/footer";
import Header from "@components/header";

export default function Home({ data }) {
  if (!data) {
    return (
      <div className="flex font-bold justify-center">
        <h1>No Internet connection</h1>
      </div>
    );
  }
  const [students, setStudents] = useState(data?.students);
  const [searchNameKey, setSearchNameKey] = useState("");
  const [searchTagKey, setSearchTagKey] = useState("");

  const onSearchChange = (event) => {
    if (event.target.name === "name") {
      setSearchNameKey(event.target.value);
      console.log("event.target.value", event.target.value);
    } else if (event.target.name === "tag") {
      setSearchTagKey(event.target.value);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  const handleSearch = (event) => {
    if (event.target.name === "name") {
      const filteredStudents = data?.students.filter((student) =>
        student.firstName.toLowerCase().startsWith(searchNameKey.toLowerCase())
      );

      setStudents(() => [...filteredStudents]);
    } else if (event.target.name === "tag") {
      const filteredStudents = students.filter((student) =>
        student.tags?.map((tag) =>
          tag.toLowerCase().includes(searchTagKey.toLowerCase())
        )
      );
      setStudents(() => [...filteredStudents]);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 justify-center min-h-screen py-2">
      <Header />
      <SearchBar
        onKeyPress={handleKeyPress}
        searchType="Name"
        name="name"
        onChange={onSearchChange}
        value={searchNameKey}
      />
      <SearchBar
        onKeyPress={handleKeyPress}
        searchType="Tag"
        name="tag"
        onChange={onSearchChange}
        value={searchTagKey}
      />
      <main className="flex flex-col   items-center justify-center w-full flex-1 px-10 text-center">
        {students?.map((student) => (
          <StudentCard key={student.email} student={student} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  let res;
  try {
    res = await axios.get("https://api.hatchways.io/assessment/students");
  } catch (error) {
    console.log("error in fatching hathways api", error.message);
  }

  return {
    // undefined cannot be serialized
    props: { data: res && res.data ? res.data : null },
  };
}
