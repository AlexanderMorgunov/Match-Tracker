// Тип для игрока
export interface IPlayer {
  username: string;
  kills: number;
}

// Тип для команды
export interface ITeam {
  name: string;
  players: IPlayer[];
  points: number;
  place: number;
  total_kills: number;
}

// Тип для статуса матча
export type IMatchStatus = "Scheduled" | "Ongoing" | "Finished";

// Тип для матча
export interface IMatch {
  time: string; // Дата и время в формате ISO (date-time)
  title: string;
  homeTeam: ITeam;
  awayTeam: ITeam;
  homeScore: number;
  awayScore: number;
  status: IMatchStatus;
}
