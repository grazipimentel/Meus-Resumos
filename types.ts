
export interface Figure {
  id: string;
  caption: string;
}

export interface Paragraph {
  type: 'paragraph';
  text: string;
}

export interface Concept {
  type: 'concept';
  text: string;
  simplified: string;
}

export interface FigureContent {
    type: 'figure';
    id: string;
    caption: string;
}

export type ContentItem = Paragraph | Concept | FigureContent;

export interface ChapterData {
  id: number;
  title: string;
  summary: string;
  content: ContentItem[];
}
