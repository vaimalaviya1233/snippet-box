import { TagCount, NewSnippet, Snippet, SearchQuery, UserWithRole } from '.';

export interface SnippetsContext {
  snippets: Snippet[];
  searchResults: Snippet[];
  currentSnippet: Snippet | null;
  tagCount: TagCount[];
  getSnippets: () => void;
  getSnippetById: (id: number) => void;
  setSnippet: (id: number) => void;
  createSnippet: (snippet: NewSnippet) => void;
  updateSnippet: (snippet: NewSnippet, id: number, isLocal?: boolean) => void;
  deleteSnippet: (id: number) => void;
  toggleSnippetPin: (id: number) => void;
  countTags: () => void;
  searchSnippets: (query: SearchQuery) => void;
}

export interface AuthContext {
  isAuthenticated: boolean;
  user: UserWithRole | null;
  autoLogin: () => void;
  login: (formData: { email: string; password: string }) => void;
  register: (formData: { email: string; password: string }) => void;
}
