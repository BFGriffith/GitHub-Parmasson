const siteDescription = "This is a “librarian” repository to act as a conveniently catalogued and helpfully organizationally presented archival virtual “Library” ⟦Quenya=“Parmassë”⟧ of GitHub code repositories that seem interesting or worthy of greater attention…";
export const SITE = {
	title: 'GitHub Parmassë',
	description: siteDescription,
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'BFGriffith',
};

// frontmatter for docs markdown files
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);
export const GITHUB_EDIT_URL = `https://github.com/BFGriffith?tab=repositories`;
export const COMMUNITY_INVITE_URL = `https://bfgriffith.github.io/about/`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'GitHub Repositories': [
			{ text: 'Introduction', link: 'GitHub-Parmasson/en/introduction' },
			{ text: 'Oh My Zsh', link: 'GitHub-Parmasson/en/oh-my-zsh' },
			{ text: 'Obsidian Plugins', link: 'GitHub-Parmasson/en/Obsidian-plugins' },
		],
		'💻\🧘🏽‍♂️': [{ text: 'Code Koans', link: 'GitHub-Parmasson/en/code-koans' }],
	},
};
