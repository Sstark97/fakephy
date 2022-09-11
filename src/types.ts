import { ReactNode } from "react";

// Reducer
export interface InitialState {
    result: number;
    search: string;
    page: number;
    count: number;
    maxPage: number;
};

export interface ReducerAction {
    type: string,
    payload?: InitialState
};

export interface ReducerObject {
    [key: string]: (state: InitialState, action: ReducerAction) => InitialState,
}

export enum ActionTypes {
    RESULT = "RESULT",
    SEARCH = "SEARCH",
    PAGE = "PAGE",
    COUNT = "COUNT",
    MAX_PAGE = "MAX_PAGE",
};

// Context
export interface AppState extends Required<InitialState> {
    handleChangeResultInContext: (newResult: number) => void;
    handleChangeSearchInContext: (newSearch: string) => void;
    handleChangePageInContext: (newPage: number) => void;
    handleChangeCountInContext: (newCount: number) => void;
    handleChangeMaxPageInContext: (newMaxPage: number) => void;
}

// Hooks 
export interface GifHook {
    handleChangeGifs: () => void;
    handlechangePage: (newPage: number) => void;
    gifs: Gif[] | undefined;
    count: number;
    result: number;
    page: number;
}

// Components
export interface ChildrenProps {
    children: ReactNode;
};

export interface ContentListProps {
    content: Gif[];
}

export interface ContentProps {
    src: string;
    alt: string;
}

// Objects
export interface Original {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
    frames: string;
    hash: string;
}

export interface Downsized {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface DownsizedLarge {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface DownsizedMedium {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface DownsizedSmall {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

export interface DownsizedStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface FixedHeight {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}

export interface FixedHeightDownsampled {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
}

export interface FixedHeightSmall {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}

export interface FixedHeightSmallStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface FixedHeightStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface FixedWidth {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}

export interface FixedWidthDownsampled {
    height: string;
    width: string;
    size: string;
    url: string;
    webp_size: string;
    webp: string;
}

export interface FixedWidthSmall {
    height: string;
    width: string;
    size: string;
    url: string;
    mp4_size: string;
    mp4: string;
    webp_size: string;
    webp: string;
}

export interface FixedWidthSmallStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface FixedWidthStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface Looping {
    mp4_size: string;
    mp4: string;
}

export interface OriginalStill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface OriginalMp4 {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

export interface Preview {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

export interface PreviewGif {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface PreviewWebp {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface Wstill {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface Hd {
    height: string;
    width: string;
    mp4_size: string;
    mp4: string;
}

export interface Images {
    original: Original;
    downsized: Downsized;
    downsized_large: DownsizedLarge;
    downsized_medium: DownsizedMedium;
    downsized_small: DownsizedSmall;
    downsized_still: DownsizedStill;
    fixed_height: FixedHeight;
    fixed_height_downsampled: FixedHeightDownsampled;
    fixed_height_small: FixedHeightSmall;
    fixed_height_small_still: FixedHeightSmallStill;
    fixed_height_still: FixedHeightStill;
    fixed_width: FixedWidth;
    fixed_width_downsampled: FixedWidthDownsampled;
    fixed_width_small: FixedWidthSmall;
    fixed_width_small_still: FixedWidthSmallStill;
    fixed_width_still: FixedWidthStill;
    looping: Looping;
    original_still: OriginalStill;
    original_mp4: OriginalMp4;
    preview: Preview;
    preview_gif: PreviewGif;
    preview_webp: PreviewWebp;
    w_still: Wstill;
    hd: Hd;
}

export interface Onload {
    url: string;
}

export interface Onclick {
    url: string;
}

export interface Onsent {
    url: string;
}

export interface Analytics {
    onload: Onload;
    onclick: Onclick;
    onsent: Onsent;
}

export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    profile_url: string;
    username: string;
    display_name: string;
    description: string;
    instagram_url: string;
    website_url: string;
    is_verified: boolean;
}

export interface Gif {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: Images;
    analytics_response_payload: string;
    analytics: Analytics;
    user: User;
}
