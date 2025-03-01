import React from "react";
import { MatchTrackerHeader } from "./MatchTrackerHeader";
import { useQuery } from "@tanstack/react-query";
import { getMatches } from "../../../shared/api/matchTracker/Matches/Matches";
import { Match } from "../../../entities/Match/ui/Match";

const MatchTracker: React.FC = () => {
  const { data, refetch, isError, isLoading } = useQuery({
    queryKey: ["matchTracker"],
    queryFn: () => getMatches(),
    staleTime: 60 * 1000 * 5,
  });
  return (
    <div className="flex flex-col wrapper h-full min-h-screen bg-background font-foreground text-foreground gap-5">
      <MatchTrackerHeader
        onRefresh={refetch}
        isError={isError}
        isLoading={isLoading}
      />
      <div className="flex flex-col gap-3 cursor-pointer">
        {data &&
          data.map((match) => {
            return <Match match={match} key={match.time} />;
          })}
      </div>
    </div>
  );
};

export default MatchTracker;
