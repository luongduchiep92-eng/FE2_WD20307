export interface Category {
  id?: number;
  title: string;
  description?: string;
  active?: boolean;
}

export interface Story {
  id?: number;
  title: string;
  description: string;
  active: boolean;
  categoryId: number;
}