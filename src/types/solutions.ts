export interface SolutionInterface {
  title: string;
  sections: SectionsInterface[];
}

export interface SectionsInterface {
  title: string;
  submissions: SubmissionInterface[];
}

export interface SubmissionInterface {
  language: string;
  date: string;
  path: string;
}
