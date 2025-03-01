import { IconCrown } from "../../../shared/icons/IconCrown";

interface IHomeTeamTitleProps {
  name: string;
}

export const HomeTeamName = ({ name }: IHomeTeamTitleProps) => {
  return (
    <div className="flex flex-row items-center gap-3 font-semibold">
      <IconCrown />
      <span>{name}</span>
    </div>
  );
};
