export const categorys : Category[] = [
  {
    id: 1,
    name: "All",
    slug: "/articles",
  },
  {
    id: 2,
    name: "HackerRank",
    slug: "/category/hackerrank",
    path: "hackerrank",
    image: "/category/hacker-rank.jpeg",
  },
  {
    id: 7,
    name: "HackerRank Math",
    slug: "/category/hackerrankmath",
    path: "hackerrankmath",
    image: "/category/hackerrank-math.jpeg",
  },{
    id: 8,
    name: "Data Structures & Algorithms",
    slug: "/category/datastuctures",
    path: "datastuctures",
    image: "/category/data-structures.png",
  },
  {
    id: 3,
    name: "Codeforces",
    slug: "/category/codeforces",
    path: "codeforces",
    image: "/category/code-forces.jpeg",
  },
  {
    id: 4,
    name: "Leetcode",
    slug: "/category/leetcode",
    path: "leetcode",
    image: "/category/leet-codea.jpeg",
  },
  {
    id: 5,
    name: "Codechef",
    slug: "/category/codechef",
    path: "codechef",
    image: "/category/codechef.jpeg",
  },
  {
    id: 6,
    name: "Hackathon",
    slug: "/category/hackathon",
    path: "hackathon",
    image: "/category/hackathon.jpeg",
  },
];


export interface Category {
  id: number;
  name: string;
  slug: string;
  image?: string;
  path?: string
}