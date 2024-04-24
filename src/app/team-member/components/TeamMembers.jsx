import Member from "./Member";
import { getTeam } from "@/lib/data";

const TeamMembers = async () => {
  const team = JSON.parse(JSON.stringify(await getTeam()));
  
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 cLg:grid-cols-4 gap-4">
      {team.map((item) => (
        <Member key={item.name} data={item} />
      ))}
    </div>
  );
};

export default TeamMembers;
