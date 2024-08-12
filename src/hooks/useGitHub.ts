import { useEffect, useState } from 'react';

interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string | null;
}

interface UseGitHubRepositoriesResult {
  repositories: GitHubRepository[] | null;
  loading: boolean;
  error: string | null;
}

export function useGitHubRepositories(
  username: string,
): UseGitHubRepositoriesResult {
  const CACHE_KEY = `github_repositories_${username}`;
  const CACHE_EXPIRATION_KEY = `${CACHE_KEY}_expiration`;

  const [repositories, setRepositories] = useState<GitHubRepository[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      setLoading(true);
      setError(null);
      try {
        const cachedRepositories = localStorage.getItem(CACHE_KEY);
        const cachedExpiration = localStorage.getItem(CACHE_EXPIRATION_KEY);
        if (cachedRepositories && cachedExpiration) {
          const expirationDate = new Date(cachedExpiration);
          if (expirationDate > new Date()) {
            setRepositories(JSON.parse(cachedRepositories));
            setLoading(false);
            return;
          }
        }

        let allRepositories: GitHubRepository[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?page=${page}&per_page=100`,
          );
          if (!response.ok) {
            throw new Error('Failed to fetch GitHub repositories');
          }
          const data: GitHubRepository[] = await response.json();
          if (data.length === 0) {
            hasMore = false;
          } else {
            allRepositories = allRepositories.concat(data);
            page++;
          }
        }

        const repositoriesWithLanguage = allRepositories
          .map((repo) => ({
            ...repo,
            language: repo.language || 'Unknown',
          }))
          .filter((repo) => repo.language !== 'Unknown');

        setRepositories(repositoriesWithLanguage);
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify(repositoriesWithLanguage),
        );
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        localStorage.setItem(
          CACHE_EXPIRATION_KEY,
          expirationDate.toISOString(),
        );
      } catch (error) {
        console.error(error);
        setError('Failed to fetch GitHub repositories');
        setRepositories(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [username, CACHE_KEY, CACHE_EXPIRATION_KEY]);

  return { repositories, loading, error };
}
