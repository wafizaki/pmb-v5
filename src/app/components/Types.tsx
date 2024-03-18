import { Dispatch, SetStateAction } from "react";

export type ColumnType = "todo" | "doing" | "done";

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

export type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type DropIndicatorProps = {
  beforeId: string | null;
  column: string;
};

export type CardProps = CardType & {
  handleDragStart: Function;
  updateTask: (title: string, id: string) => void;
};

export const DEFAULT_CARDS: CardType[] = [
  
];
