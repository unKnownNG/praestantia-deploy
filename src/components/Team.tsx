import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Dr. G. THAMARAI SELVI",
    designation: "Head Of The Department",
    image: "/hod.jpg",
  },
  {
    name: "Ms. V. SUBASHINI ",
    designation: "Associate Professor",
    image: "/SUBASHINI.jpg",
  },
  {
    name: "Ms. G. VALARMATHI",
    designation: "Associate Professor",
    image: "/VALARMATHI.jpg",
  },
  { name: "Ms. SAKTHI S", designation: "President", image: "/president.jpg" },
  {
    name: "Mr. NIRANJAN R",
    designation: "Vice President",
    image: "/niranjan2.jpg",
  },
  { name: "Ms. RANZHANI V", designation: "Secratary", image: "/secretary.jpg" },
  {
    name: "Mr. BHUVANESH L",
    designation: "Treasurer",
    image: "/treasurer.jpg",
  },
  {
    name: "Ms. DEEPTHI",
    designation: "Join Secretary",
    image: "/joinSecretary.jpg",
  },
  {
    name: "Mr. SHRI SHARAN KS",
    designation: "Joint Treasurer",
    image: "/jointTreasurer.jpg",
  },
  {
    name: "Mr. G R VISHWANAND",
    image: "/vishwa.jpg",
    github: "https://github.com/Nightmare1854",
    linkedin: "https://www.linkedin.com/in/vishwanandgr",
  },
  {
    name: "Mr. R MOHAMMED DAIYAAN",
    image: "/daiyaan.jpg",
    github: "https://github.com/unKnownNG",
    linkedin: "https://www.linkedin.com/in/mohammed-daiyaan-6791a7276/",
  },
  {
    name: "Mr. M Balamurugan",
    image: "/bala2.jpg",
    github: "https://github.com/Bala152004",
    linkedin: "https://www.linkedin.com/in/bala-murugan152004",
  },
];
export default function Team() {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold mb-10">MEET THE TEAM</h1>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Row 1 - 1 Person */}
          <div className="mb-8 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 flex items-center justify-center">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                width={160}
                height={160}
                objectFit="cover"
                className="object-center z-40"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{teamMembers[0].name}</p>
              <p className="text-gray-500">{teamMembers[0].designation}</p>
            </div>
          </div>

          {/* Row 2 - 2 People */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {teamMembers.slice(1, 3).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-gray-500">{member.designation}</p>
              </div>
            ))}
          </div>

          {/* Row 3 - 7 People */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {teamMembers.slice(3, 9).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
                <p className="text-base font-semibold">{member.name}</p>
                <p className="text-gray-500">{member.designation}</p>
              </div>
            ))}
          </div>
          {/* Web team */}
          <h1 className="text-center text-3xl font-bold mb-10 mt-10">
            MEET THE DEVS
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 z-20 lg:grid-cols-3 gap-8 justify-center mx-auto">
            {teamMembers.slice(9).map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
                <p className="text-base font-semibold flex items-center align-middle">{member.name}</p>
                <p className="text-gray-500">{member.designation}</p>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={25} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
