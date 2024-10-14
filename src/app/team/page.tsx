import Image from 'next/image';

const teamMembers = [
  { name: 'Person 1', designation: 'Lead Organizer', image: '/logo.png' },
  { name: 'Person 2', designation: 'Event Coordinator', image: '/logo.png' },
  { name: 'Person 3', designation: 'Designer', image: '/logo.png' },
  { name: 'Person 4', designation: 'Speaker', image: '/logo.png' },
  { name: 'Person 5', designation: 'Volunteer', image: '/logo.png' },
  { name: 'Person 6', designation: 'Volunteer', image: '/logo.png' },
  { name: 'Person 7', designation: 'Volunteer', image: '/logo.png' },
  { name: 'Person 8', designation: 'Volunteer', image: '/logo.png' },
  { name: 'Person 9', designation: 'Volunteer', image: '/logo.png' },
  { name: 'Person 10', designation: 'Volunteer', image: '/logo.png' },
];
export default function page() {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold mb-10">Meet the Team</h1>
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {/* Row 1 - 1 Person */}
          <div className="mb-8">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 relative items-center">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                layout="fill"
                objectFit="cover"
                className="object-center"
              />
            </div>
            <div className="">

            <p className="text-xl font-semibold flex justify-center">{teamMembers[0].name}</p>
            <p className="text-gray-500 flex justify-center">{teamMembers[0].designation}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {teamMembers.slice(3).map((member, index) => (
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
        </div>
      </div>
    </div>
  );
}
