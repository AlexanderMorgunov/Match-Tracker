import { IMatch } from "../model/type";
import { AwayTeamName } from "./AwayTeamName";
import { HomeTeamName } from "./HomeTeamName";
import { Scoreboard } from "./Scoreboard";

interface MatchProps {
  match: IMatch;
}

export const Match = ({ match }: MatchProps) => {
  return (
    <div className="flex flex-row justify-between p-4 bg-background-dark rounded-[0.25rem]">
      <HomeTeamName name={match.homeTeam.name} />
      <Scoreboard
        status={match.status}
        homeScore={match.homeScore}
        awayScore={match.awayScore}
      />
      <AwayTeamName name={match.awayTeam.name} />
    </div>
  );
};
