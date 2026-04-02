import { gql } from "@apollo/client";

// ── Fragments ──
export const PLAYER_CARD_FRAGMENT = gql`
  fragment PlayerCard on Player {
    id
    slug
    title
    featuredImage {
      node {
        sourceUrl(size: MEDIUM_LARGE)
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    playerFields {
      gamertag
      role
      team
      nationality
      isActive
      bgisStats {
        kills
        avgDamage
        rating
        clutchFactor
        survivalRating
      }
      socials {
        twitter
        instagram
        youtube
      }
    }
  }
`;

// ── Paginated Roster ──
export const GET_PLAYERS = gql`
  ${PLAYER_CARD_FRAGMENT}
  query GetPlayers(
    $first: Int = 12
    $after: String
    $team: [String]
    $orderBy: PostObjectsConnectionOrderbyEnum = MENU_ORDER
  ) {
    players(
      first: $first
      after: $after
      where: {
        orderby: { field: $orderBy, order: ASC }
        taxQuery: {
          taxArray: [{ taxonomy: TEAM, terms: $team, field: SLUG }]
        }
      }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...PlayerCard
      }
    }
  }
`;

// ── Single Player Profile ──
export const GET_PLAYER_BY_SLUG = gql`
  ${PLAYER_CARD_FRAGMENT}
  query GetPlayerBySlug($slug: ID!) {
    player(id: $slug, idType: SLUG) {
      ...PlayerCard
      content
      playerFields {
        gamertag
        role
        team
        nationality
        isActive
        bio
        joinDate
        bgisStats {
          kills
          avgDamage
          rating
          clutchFactor
          survivalRating
        }
        tournamentHistory {
          name
          year
          placement
          kills
        }
        socials {
          twitter
          instagram
          youtube
        }
      }
      relatedPosts: posts(first: 3) {
        nodes {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl(size: MEDIUM)
            }
          }
        }
      }
    }
  }
`;

// ── BGIS MVP Query (for Hero Banner) ──
export const GET_BGIS_MVP = gql`
  ${PLAYER_CARD_FRAGMENT}
  query GetBGISMVP {
    players(
      first: 1
      where: {
        metaQuery: {
          metaArray: [
            { key: "bgis_mvp", value: "true", compare: EQUAL_TO }
          ]
        }
      }
    ) {
      nodes {
        ...PlayerCard
      }
    }
  }
`;

// ── TypeScript Interfaces ──
export interface PlayerBGISStats {
  kills: number;
  avgDamage: number;
  rating: number;
  clutchFactor: number;
  survivalRating: number;
}

export interface PlayerSocials {
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

export interface TournamentEntry {
  name: string;
  year: number;
  placement: string;
  kills: number;
}

export interface PlayerFields {
  gamertag: string;
  role: string;
  team: string;
  nationality: string;
  isActive: boolean;
  bio?: string;
  joinDate?: string;
  bgisStats: PlayerBGISStats;
  tournamentHistory?: TournamentEntry[];
  socials: PlayerSocials;
}

export interface Player {
  id: string;
  slug: string;
  title: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails: {
        width: number;
        height: number;
      };
    };
  };
  playerFields: PlayerFields;
}
