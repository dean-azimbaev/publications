import { IPublication } from "../../interfaces";

export interface PublicationsProps {
  publications: IPublication[];
  loading: boolean;
  onSelected: (publication: IPublication) => void;
}
