import { http } from "../http";

import { IPublication } from "./interfaces";

export class PublicationService {
  static find = async (): Promise<IPublication[]> => {
    return http
      .get("/illustration", {
        params: {
          count: 137,
          page: 1,
        },
      })
      .then(({ data }) => data.result.illustrationData);
  };
}
