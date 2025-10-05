export type Repo = {
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  updated_at: string;
};

export type ContributorAPI = {
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
};

const REPO_API = 'https://api.github.com/repos/HXQLabs/Helixque';

function headers(token?: string) {
  const h: Record<string, string> = { Accept: 'application/vnd.github.v3+json' };
  if (token) h['Authorization'] = `token ${token}`;
  return h;
}

async function handleRes(res: Response) {
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText}${text ? ' - ' + text : ''}`);
  }
  return res.json();
}

/**
 * Fetch repository metadata. Pass an optional GitHub PAT (token) to increase rate limits.
 * WARNING: Do NOT expose a non-public token in client-side code. Use server-side routes for secrets.
 */
export async function getRepo(token?: string): Promise<Repo> {
  const res = await fetch(REPO_API, { headers: headers(token) });
  return handleRes(res) as Promise<Repo>;
}

export async function getContributors(token?: string, per_page = 100): Promise<ContributorAPI[]> {
  const url = `${REPO_API}/contributors?per_page=${per_page}`;
  const res = await fetch(url, { headers: headers(token) });
  return handleRes(res) as Promise<ContributorAPI[]>;
}

export async function getLanguages(token?: string): Promise<Record<string, number>> {
  const url = `${REPO_API}/languages`;
  const res = await fetch(url, { headers: headers(token) });
  return handleRes(res) as Promise<Record<string, number>>;
}

/**
 * Fetch repo, contributors and languages in parallel. Returns an object with those fields.
 */
export async function fetchAll(token?: string) {
  const [repo, contributors, languages] = await Promise.all([
    getRepo(token),
    getContributors(token),
    getLanguages(token),
  ]);
  return { repo, contributors, languages };
}
