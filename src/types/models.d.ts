type Committee =
  | "Executive"
  | "Technology"
  | "Public Relations"
  | "Budget & Finance"
  | "Events & Operations";

type ExecutiveCommittee =
  | "Chief Executive Officer"
  | "Chief Operations Officer"
  | "Chief Innovations Officer"
  | "Chief Technology Officer"
  | "Chief Media Officer"
  | "Chief Financial Officer";

type TechnologyCommittee =
  | "Technology Lead"
  | "Technology Co-Lead"
  | "Technology Education Officer"
  | "Technology Project Officer"
  | "Technology Officer";

interface Member {
  id: string;
  firstName: string;
  lastName: string;
  committee?: Committee;
  position: string;
}
