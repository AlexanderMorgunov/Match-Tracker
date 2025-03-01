import { useState } from "react";
import { IconRefresh } from "../../../shared/icons/IconRefresh";
import { Button } from "../../../shared/ui/Button/Button";
import { MatchTrackerHeaderError } from "./MatchTrackerHeaderError";

interface IMatchTrackerHeaderProps {
  onRefresh: () => void;
  isError: boolean;
  isLoading: boolean;
}
export const MatchTrackerHeader = ({
  onRefresh,
  isError,
  isLoading,
}: IMatchTrackerHeaderProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = async () => {
    setIsRefreshing(true); // Включаем анимацию
    await onRefresh(); // Выполняем перезапрос данных
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="flex flex-row justify-between">
      <a className="logo" href="/">
        Match Tracker
      </a>
      <div className="flex flex-row gap-3">
        {isError && <MatchTrackerHeaderError />}
        <Button variant="danger" className="px-12 py-4" onClick={handleRefresh}>
          <div className="flex flex-row items-center gap-2 font-semibold">
            Обновить
            <div className="flex flex-col gap-0">
              <IconRefresh
                className={`text-2xl ${
                  isLoading || isRefreshing ? "animate-spin" : ""
                }`}
              />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
