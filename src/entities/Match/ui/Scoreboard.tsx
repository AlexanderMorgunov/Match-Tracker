import { cn } from "../../../shared/utils/cn/cn";

interface IScoreboardProps {
  status: string;
  homeScore: number;
  awayScore: number;
}

export const Scoreboard = ({
  status,
  homeScore,
  awayScore,
}: IScoreboardProps) => {
  const color = status === "Finished" ? "bg-danger" : "bg-primary";
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="text-xl font-semibold">{`${homeScore} : ${awayScore}`}</div>
      <div
        className={cn(
          "px-[2rem] py-[.25rem] text-[0.75rem] rounded-[0.25rem]",
          color
        )}
      >
        {status}
      </div>
    </div>
  );
};
