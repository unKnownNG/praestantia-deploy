import Image from 'next/image';

const teamMembers = [
  { name: 'Dr. G. THAMARAI SELVI', designation: 'Head Of The Department', image: '/hod.jpg' },
  { name: 'Ms. V.SUBASHINI ', designation: 'Assistant Professor', image: '/SUBASHINI.jpg' },
  { name: 'Ms. G. VALARMATHI', designation: 'Associate Professor', image: '/VALARMATHI.jpg' },
  { name: 'Ms. SAKTHI S', designation: 'President', image: '/president.jpg' },
  { name: 'Mr. NIRANJAN R', designation: 'Vice President', image: '/vicePresident.jpg' },
  { name: 'Ms. RANZHANI V', designation: 'Secratary', image: '/secretary.jpg' },
  { name: 'Mr. BHUVANESH L', designation: 'Treasurer', image: '/treasurer.jpg' },
  { name: 'Ms. DEEPTHI', designation: 'Join Secretary', image: '/joinSecretary.jpg' },
  { name: 'Mr. SHRI SHARAN KS', designation: 'Joint Treasurer', image: '/jointTreasurer.jpg' },
];
export default function page() {
  return (
    <div className="py-10">
      <h1 className="text-center text-3xl font-bold mb-10">Meet the Team</h1>
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
      className="object-center"
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
