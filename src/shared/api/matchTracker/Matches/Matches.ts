import { IMatch } from "../../../../entities/Match/model/type";
import { $api } from "../../axios/axios";
import { SuccessfulResponse } from "./type";

export const getMatches = async (): Promise<IMatch[]> => {
  try {
    const { data } = await $api.get<SuccessfulResponse>("/fronttemp");
    return data.data.matches;
  } catch (error) {
    console.error("Ошибка при получении списка матчей:", error);
    throw error;
  }
};
