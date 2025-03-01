import { IconAlertTriangle } from "../../../shared/icons/IconAlertTriangle";

export const MatchTrackerHeaderError = () => {
  return (
    <div className="flex flex-row gap-2 p-4 bg-background-dark">
      <IconAlertTriangle />
      <span>Ошибка: не удалось загрузить информацию</span>
    </div>
  );
};
