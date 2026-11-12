interface SearchParamsLike {
  toString(): string;
}

export interface FilterOption {
  slug: string;
  name: string;
}

export const categoryParam = 'category';
export const sortParam = 'sort';
export const searchParam = 'q';

export function updateSearchParams(
  pathname: string,
  currentParams: SearchParamsLike,
  updates: Record<string, string | null>
) {
  const params = new URLSearchParams(currentParams.toString());

  for (const [key, value] of Object.entries(updates)) {
    if (value === null) params.delete(key);
    else params.set(key, value);
  }

  const query = params.toString();
  window.history.replaceState(null, '', query ? `${pathname}?${query}` : pathname);
}
