import { IconCrown } from "../../../shared/icons/IconCrown";

interface IAwayTeamNameProps {
  name: string;
}

export const AwayTeamName = ({ name }: IAwayTeamNameProps) => {
  return (
    <div className="flex flex-row items-center gap-3 font-semibold">
      <span>{name}</span>
      <IconCrown />
    </div>
  );
};
