import { IMatch } from "../../../../entities/Match/model/type";

// Тип для успешного ответа
export interface SuccessfulResponse {
  ok: boolean;
  data: {
    matches: IMatch[];
  };
}
