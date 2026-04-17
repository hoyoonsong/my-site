/**
 * Gallery — single manifest
 * -------------------------
 * All image files live in one place: `public/gallery/` (no subfolders).
 *
 * Each row is one photo:
 *   - `album`: which *album* it appears under on the site (`me`, `mentors`, or `misc`)
 *   - `file`: filename only — must match a file in `public/gallery/`
 *   - `title`: optional short label under the thumbnail; omit to auto-generate from the filename
 *   - `caption`: optional longer line — hover (white overlay) + fullscreen; omit for no hover overlay
 *
 * **Reorder rows** → order within that album on the site.
 * **Change `album`** → moves the photo to another album in the UI only (file stays put).
 *
 * Custom text: set `title` and/or `caption`. Omit `title` to auto-generate from the filename.
 */

export type GalleryItem = {
  src: string;
  title: string;
  /** Longer line under the title; omit if none */
  caption?: string;
};

export type GallerySectionId = "me" | "mentors" | "misc";

export type GallerySection = {
  id: GallerySectionId;
  heading: string;
  items: GalleryItem[];
};

export type GalleryManifestRow = {
  album: GallerySectionId;
  file: string;
  title?: string;
  caption?: string;
  /** Mark exactly one row per album as the hub cover. */
  thumbnail?: boolean;
};

/** Short line for the gallery hub cards. */
export const GALLERY_FOLDER_BLURBS: Record<GallerySectionId, string> = {
  me: "Portraits, events, and everyday shots—just me.",
  mentors: "Mentors, collaborators, and people who have shaped the path.",
  misc: "Odds and ends that don't fit the other albums.",
};

const SECTION_HEADINGS: Record<GallerySectionId, string> = {
  me: "Me",
  mentors: "With mentors & others",
  misc: "Misc",
};

/**
 * Edit this list only. Group by `album` however you like; order here is the
 * order shown on the site within each album.
 */
export const GALLERY_MANIFEST: GalleryManifestRow[] = [
  {
    album: "me",
    file: "20230721_Boys Nation_Idaho_Hoyoon Song.jpg",
    title: "Boys Nation — Idaho",
    caption: "American Legion Boys Nation, representing Idaho.",
    thumbnail: true,
  },
  {
    album: "me",
    file: "2B85C477-B765-4B6A-8D23-913DDEED637B_Original.jpeg",
    title: "Clarinet in the Sawtooth Mountains",
    caption: "while in residence at theIdaho Orchestra Institute",
  },
  {
    album: "me",
    file: "9800AD42-1BDA-435D-A809-5CB558C23E39.jpeg",
    title: "BPYO Solo Concert",
    caption:
      "Performing with the orchestra after winning the Concerto Competition",
  },
  {
    album: "me",
    file: "Hoyoon - BK Ad.jpeg",
    title: "Bishop Kelly Ad",
    caption:
      "Seen on the school website, billboards, and Boise Towne Square Mall",
  },
  {
    album: "mentors",
    file: "IMG_0012.jpeg",
    title: "Robert Simison",
    caption: "Mayor of Meridian, Idaho",
  },
  {
    album: "mentors",
    file: "IMG_0236.jpeg",
    title: "Condoleezza Rice",
    caption: "Former Secretary of State and Stanford professor",
  },
  {
    album: "mentors",
    file: "IMG_0678.jpeg",
    title: "Jim Coulter",
    caption: "Founder of TPG Capital",
  },
  {
    album: "mentors",
    file: "IMG_0736.jpeg",
    title: "Kelly Anthon",
    caption: "Majority Leader of Idaho Senate",
  },
  {
    album: "mentors",
    file: "IMG_0757.jpeg",
    title: "Mark Rober",
    caption: "Youtuber",
  },
  {
    album: "mentors",
    file: "IMG_0893.jpeg",
    title: "Xavier Becerra",
    caption: "Former Secretary of Health and Human Services",
  },
  {
    album: "mentors",
    file: "IMG_1012.jpeg",
    title: "Treg Bernt",
    caption: "Idaho State Senator",
  },
  {
    album: "mentors",
    file: "IMG_1190.jpeg",
    title: "Margarethe Vestager",
    caption:
      "Vice President of European Commission and Commissioner for Competition",
  },
  {
    album: "mentors",
    file: "IMG_1225.jpeg",
    title: "Sérgio Pires",
    caption:
      "Principal Clarinet of the London Symphony Orchestra and Legendary soloist",
  },
  { album: "me", file: "IMG_1305.JPG", title: "Llama" },
  {
    album: "me",
    file: "IMG_1435 2.jpeg",
    title: "Carnegie Hall",
    caption: "Principal Clarinet of the Honors Symphony Orchestra",
  },
  { album: "me", file: "IMG_1483.jpg", title: "Civic Salon" },
  {
    album: "mentors",
    file: "IMG_1615.jpeg",
    title: "Dirk Kempthorne",
    caption: "Former Governor of Idaho and Secretary of the Interior",
  },
  {
    album: "mentors",
    file: "IMG_1645.jpeg",
    title: "John King Jr.",
    caption:
      "Former Secretary of Education under President Barack Obama and Chancellor of SUNY",
  },
  {
    album: "mentors",
    file: "IMG_1646.jpeg",
    title: "Margaret Spellings",
    caption: "Former Secretary of Education under President George W. Bush",
  },
  {
    album: "mentors",
    file: "IMG_1654.jpeg",
    title: "Hillary Clinton",
    caption: "Former Secretary of State and First Lady of the United States",
  },
  {
    album: "mentors",
    file: "IMG_1666.jpeg",
    title: "Dr. Nadine Burke Harris",
    caption: "First Surgeon General of California",
  },
  {
    album: "mentors",
    file: "IMG_1703.jpeg",
    title: "Evan Spiegel",
    caption: "Founder and CEO of Snapchat",
  },
  {
    album: "mentors",
    file: "IMG_1716.jpeg",
    title: "Allen Vizzuti",
    caption: "Legendary Trumpet Player",
  },
  {
    album: "me",
    file: "IMG_2075.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "me",
    file: "IMG_2077.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "me",
    file: "IMG_2078.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "me",
    file: "IMG_2085.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "me",
    file: "IMG_2086.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "me",
    file: "IMG_2102.jpeg",
    title: "Cour'd Alene",
    caption: "Scenes from the Idaho State Solo & Ensemble Competition",
  },
  {
    album: "mentors",
    file: "IMG_2179.jpeg",
    title: "Roger Federer",
    caption: "Legendary Tennis Player",
  },
  {
    album: "me",
    file: "IMG_2683.jpeg",
    title: "Last BPYO Concert",
    caption: "with Kurtis",
  },
  {
    album: "mentors",
    file: "IMG_2778.jpeg",
    title: "John Taylor",
    caption: "legendary economist and discoverer of the Taylor Rule",
  },
  {
    album: "mentors",
    file: "IMG_2822.jpeg",
    title: "Murray Rankin",
    caption:
      "Former British Columbia Minister, Indigenous Relations and Reconciliation ",
  },
  {
    album: "mentors",
    file: "IMG_2949.jpeg",
    title: "Rishi Sunak",
    caption: "Prime Minister of the United Kingdom",
    thumbnail: true,
  },
  {
    album: "mentors",
    file: "IMG_2970.jpeg",
    title: "Ned Burns",
    caption: "Minority Leader of Idaho House of Representatives",
  },
  {
    album: "mentors",
    file: "IMG_2984.jpeg",
    title: "Dori Healey",
    caption: "Idaho State Representative",
  },
  {
    album: "mentors",
    file: "IMG_3166.jpeg",
    title: "Justice Stephen Breyer",
    caption: "Former Supreme Court Justice of the United States",
  },
  {
    album: "mentors",
    file: "IMG_3169.jpeg",
    title: "Michael McFaul",
    caption: "Former Ambassador to Russia",
  },
  {
    album: "me",
    file: "IMG_3210.jpeg",
    title: "Ice Cream Potato",
    caption: "First time having ice cream potato at West Side Drive In",
  },
  {
    album: "mentors",
    file: "IMG_3382.jpeg",
    title: "Michael Lewis",
    caption: "Author of The Big Short and Moneyball",
  },
  {
    album: "me",
    file: "IMG_3416.jpeg",
    title: "Gyeongbokgung Palace",
    caption: "Me in Hanbok on a trip to Seoul, South Korea 2024",
  },
  {
    album: "me",
    file: "IMG_3467.jpeg",
    title: "Seoul",
    caption: "Me in Hanbok on a trip to Seoul, South Korea 2024",
  },
  {
    album: "me",
    file: "IMG_4280 2.jpeg",
    title: "Lobbying in the Idaho State Capitol",
    caption: "for youth lobby day for the American Heart Association",
  },
  {
    album: "me",
    file: "IMG_4663.jpeg",
    title: "Carmen Izzo",
    caption: "With my Rabbi of clarinet",
  },
  {
    album: "me",
    file: "IMG_4766.jpeg",
    title: "1985 Macintosh SE",
    caption: "My first computer",
  },
  {
    album: "me",
    file: "IMG_4817.jpeg",
    title: "Graduation",
    caption: "at Bishop Kelly High School",
  },
  {
    album: "me",
    file: "IMG_4818.jpeg",
    title: "Bishop Peter Christensen",
    caption: "at my graduation",
  },
  {
    album: "me",
    file: "IMG_4948.jpeg",
    title: "Ice Bucket Challenge",
  },
  {
    album: "mentors",
    file: "IMG_5362.jpeg",
    title: "Todd Achilles",
    caption: "Independent Candidate for US Senate",
  },
  {
    album: "me",
    file: "IMG_5471.jpeg",
    title: "Grad Cap",
    caption: "Go Stanford!",
  },
  {
    album: "mentors",
    file: "IMG_5673.jpeg",
    title: "Laurene Powell-Jobs",
    caption: "Wife of Steve Jobs and founder of the Emerson Collective",
  },
  {
    album: "mentors",
    file: "IMG_5679.jpeg",
    title: "Christopher Wray",
    caption: "Director of the FBI",
  },
  {
    album: "mentors",
    file: "IMG_5751.jpeg",
    title: "Daniel Lubetzky",
    caption: "Founder of KIND Snacks and Shark Tank investor",
  },
  {
    album: "mentors",
    file: "IMG_5933.jpeg",
    title: "Eric Yuan",
    caption: "Founder and CEO of Zoom",
  },
  {
    album: "mentors",
    file: "IMG_6023.jpeg",
    title: "Nand Mulchandani",
    caption: "First CTO of CIA",
  },
  {
    album: "mentors",
    file: "IMG_6441.jpeg",
    title: "John E. McLaughlin",
    caption: "former Acting Director of the CIA",
  },

  {
    album: "mentors",
    file: "IMG_6626.jpeg",
    title: "Andrew Luck",
    caption: "Legendary NFL Player and General Manager of Stanford Football",
  },
  {
    album: "mentors",
    file: "IMG_6628.jpeg",
    title: "Avril Haines",
    caption: "Director of National Intelligence under President Joe Biden",
  },
  {
    album: "me",
    file: "IMG_6648.jpeg",
    title: "KZSU Broadcaster",
    caption: "first time broadcasting women's basketball game",
  },
  {
    album: "mentors",
    file: "IMG_6840.jpeg",
    title: "Jonathan Levin",
    caption: "President of Stanford University",
  },
  {
    album: "mentors",
    file: "IMG_7031.jpeg",
    title: "Rick Levin",
    caption: "President of Yale University",
  },
  {
    album: "me",
    file: "IMG_7079 2.jpeg",
    title: "Spuddy Buddy",
    caption: "Official Mascot of Idaho spotted at the Idaho Potato Drop",
  },
  {
    album: "mentors",
    file: "IMG_7138.jpeg",
    title: "Malala Yousafzai",
    caption:
      "Youngest Nobel Peace Prize Laureate and Activist for Girls' Education",
  },

  {
    album: "me",
    file: "IMG_7304.jpeg",
    title: "All State",
    caption: "Principal Clarinet of Idaho All State Concert Band",
  },
  {
    album: "mentors",
    file: "IMG_7338.jpeg",
    title: "Raul Labrador",
    caption: "Attorney General of Idaho",
  },
  {
    album: "mentors",
    file: "IMG_7340.jpeg",
    title: "Marco Erickson",
    caption: "Idaho State Representative",
  },
  {
    album: "mentors",
    file: "IMG_7348.jpeg",
    title: "Russ Fulcher",
    caption: "US Congressman from Idaho's 1st Congressional District",
  },
  {
    album: "me",
    file: "IMG_7354.jpeg",
    title: "Gavel of Idaho House of Representatives",
    caption: "Replica of Thor's Hammer",
  },
  {
    album: "mentors",
    file: "IMG_7355.jpeg",
    title: "James Petzke",
    caption: "Idaho State Representative",
  },
  {
    album: "me",
    file: "IMG_7382.jpeg",
    title: "Loba Boba",
    caption: "Winner of Idaho High School Entrepreneurship Competition",
  },
  {
    album: "mentors",
    file: "IMG_7494.jpeg",
    title: "Sal Khan",
    caption: "Founder of Khan Academy",
  },
  {
    album: "mentors",
    file: "IMG_7540.jpeg",
    title: "Hasan Minhaj",
    caption: "Showing him my photoshopped image",
  },
  {
    album: "mentors",
    file: "IMG_7541.jpeg",
    title: "Hasan Minhaj",
    caption: "Comedian and actor",
  },
  {
    album: "me",
    file: "IMG_7546.jpeg",
    title: "Stanford Speakers Bureau",
    caption: "Setting up for Hasan Minhaj's talk",
  },
  {
    album: "mentors",
    file: "IMG_7606.jpeg",
    title: "Jon Leibowitz",
    caption:
      "former Commissioner of the United States Federal Trade Commission",
  },
  {
    album: "mentors",
    file: "IMG_7628.jpeg",
    title: "Spies, Lies, and Algorithms",
    caption:
      "with Dr. Amy Zegart, Christy Abizaid, and other members of our mock National Security Council",
  },
  {
    album: "mentors",
    file: "IMG_7803.jpeg",
    title: "Jay Inslee",
    caption: "Governor of Washington",
  },
  {
    album: "mentors",
    file: "IMG_7840.jpeg",
    title: "Saikat Chakrabarti",
    caption:
      "Candidate for United States House of Representatives of San Francisco",
  },
  {
    album: "mentors",
    file: "IMG_7847.jpeg",
    title: "Ro Khanna",
    caption: "US Congressman from California's 17th Congressional District",
  },
  {
    album: "mentors",
    file: "IMG_7853.jpeg",
    title: "Bernie Sanders",
    caption: "US Senator from Vermont",
  },
  {
    album: "me",
    file: "IMG_7856.jpeg",
    title: "Sophomore Formal",
    caption: "Casino Night at Hoover Institution",
  },
  {
    album: "mentors",
    file: "IMG_8127.jpeg",
    title: "Kevin Clay",
    caption: "Kevin Price on Broadway's Book of Mormon",
  },
  {
    album: "mentors",
    file: "IMG_8149.jpeg",
    title: "David M. Kennedy",
    caption:
      "Donald J. McLachlan Professor of History Emeritus at Stanford University and the former director of the Bill Lane Center for the American West",
  },
  {
    album: "me",
    file: "IMG_8175.jpg",
    title: "Conducting",
    caption: "Rehearsal fun in the Boise Phil Youth Orchestra",
  },
  {
    album: "mentors",
    file: "IMG_8235.jpeg",
    title: "Mark Cuban",
    caption: "Owner of the Dallas Mavericks and Shark Tank investor",
  },
  {
    album: "mentors",
    file: "IMG_8361.jpeg",
    title: "Maria Corina Machado",
    caption:
      "Venezuelan Opposition Leader and Nobel Peace Prize Laureate (phone call when she was in hiding before she won the award)",
  },
  {
    album: "mentors",
    file: "IMG_8368.jpeg",
    title: "Reid Hoffman",
    caption: "Co-founder of LinkedIn and member of the Paypal Mafia",
  },
  {
    album: "me",
    file: "IMG_8503.jpeg",
    title: "Frosh Formal",
    caption: "Masquerade Ball at Stanford",
  },
  {
    album: "mentors",
    file: "IMG_8518.jpeg",
    title: "JB Pritzker and Hillary Clinton",
    caption: "at the Common Sense Summit for Kids and Families",
  },
  {
    album: "mentors",
    file: "IMG_8547.jpeg",
    title: "Raul Torres",
    caption:
      "Attorney General of New Mexico (minutes before the landmark liability case against Meta",
  },
  {
    album: "me",
    file: "IMG_8579.jpeg",
    title: "Frosh Formal",
    caption: "Masquerade Ball at Stanford",
  },
  {
    album: "me",
    file: "IMG_8855.jpg",
    title: "Track and Field",
    caption: "at Morrison Academy Taichung",
  },
  {
    album: "mentors",
    file: "IMG_9193.jpeg",
    title: "General Mark Milley",
    caption: "Chairman of the Joint Chiefs of Staff of the United States",
  },
  {
    album: "me",
    file: "IMG_9291.jpeg",
    title: "Boys Nation Capitol Day",
    caption:
      "Meeting with our congressmen and getting a tour of the US Capitol",
  },
  {
    album: "me",
    file: "IMG_9352.jpg",
    title: "Boys Nation Capitol Day",
    caption:
      "Meeting with our congressmen and getting a tour of the US Capitol",
  },
  {
    album: "mentors",
    file: "IMG_9366.jpg",
    title: "Dusty Johnson",
    caption: "US Representative from South Dakota",
  },
  {
    album: "mentors",
    file: "IMG_9611.jpeg",
    title: "Malala Yousafzai",
    caption:
      "Youngest Nobel Peace Prize Laureate and Activist for Girls' Education",
  },
  {
    album: "mentors",
    file: "IMG_9950.jpeg",
    title: "Ray Chen",
    caption: "Legendary Violinist",
  },
  {
    album: "mentors",
    file: "IMG_9967.jpeg",
    title: "Ray Chen",
    caption: "Signing my photoshopped images",
  },
  {
    album: "mentors",
    file: "IMG_9968.jpeg",
    title: "Ray Chen",
    caption: "Signing my photoshopped images",
  },
  {
    album: "mentors",
    file: "IMG_C82CFDEE7140-1.jpeg",
    title: "Election Night Watch Party",
    caption:
      "Watching the results for my first ever election: Robert Simison for Mayor of Meridian, Idaho",
  },

  {
    album: "mentors",
    file: "jimsteyer.jpeg",
    title: "Jim Steyer",
    caption:
      "Founder/CEO of Common Sense Media and Stanford professor (I'm his head Course Assistant)",
  },

  { album: "misc", file: "IMG_9915.jpeg", title: "Misc", thumbnail: true },
];

function prettifyFilename(name: string): string {
  const base = name.replace(/\.[^.]+$/i, "");
  let s = base
    .replace(/^[0-9A-F-]{30,}_?/i, "")
    .replace(/IMG_/i, "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!s) s = base.replace(/_/g, " ");
  return s || name;
}

function rowToItem(row: GalleryManifestRow): GalleryItem {
  const item: GalleryItem = {
    src: `/gallery/${encodeURIComponent(row.file)}`,
    title: row.title ?? prettifyFilename(row.file),
  };
  if (row.caption !== undefined && row.caption !== "") {
    item.caption = row.caption;
  }
  return item;
}

const ALBUM_ORDER: GallerySectionId[] = ["me", "mentors", "misc"];

/**
 * Mentor album only: display order (edit to taste). Same person’s photos are
 * kept adjacent (e.g. Malala, Ray Chen, Hasan Minhaj). Files not listed here
 * sort to the end by filename.
 */
const MENTOR_FILE_ORDER: string[] = [
  "IMG_1654.jpeg",
  "IMG_0236.jpeg",
  "IMG_2949.jpeg",
  "IMG_3166.jpeg",
  "IMG_7138.jpeg",
  "IMG_9611.jpeg",
  "IMG_2179.jpeg",
  "IMG_7853.jpeg",
  "IMG_8518.jpeg",
  "IMG_9193.jpeg",
  "IMG_0757.jpeg",
  "IMG_9950.jpeg",
  "IMG_9967.jpeg",
  "IMG_9968.jpeg",
  "IMG_6628.jpeg",
  "IMG_5679.jpeg",
  "IMG_5933.jpeg",
  "IMG_1703.jpeg",
  "IMG_8368.jpeg",
  "IMG_5673.jpeg",
  "IMG_8235.jpeg",
  "IMG_6626.jpeg",
  "IMG_7494.jpeg",
  "IMG_0893.jpeg",
  "IMG_1190.jpeg",
  "IMG_3169.jpeg",
  "IMG_1645.jpeg",
  "IMG_1646.jpeg",
  "IMG_8149.jpeg",
  "IMG_6840.jpeg",
  "IMG_7031.jpeg",
  "IMG_2778.jpeg",
  "IMG_8361.jpeg",
  "IMG_3382.jpeg",
  "IMG_1615.jpeg",
  "IMG_7803.jpeg",
  "IMG_7847.jpeg",
  "IMG_7541.jpeg",
  "IMG_7540.jpeg",
  "IMG_0678.jpeg",
  "IMG_5751.jpeg",
  "IMG_7840.jpeg",
  "jimsteyer.jpeg",
  "IMG_7628.jpeg",
  "IMG_6023.jpeg",
  "IMG_6441.jpeg",
  "IMG_1666.jpeg",
  "IMG_8547.jpeg",
  "IMG_9366.jpg",
  "IMG_1716.jpeg",
  "IMG_1225.jpeg",
  "IMG_7348.jpeg",
  "IMG_5362.jpeg",
  "IMG_7338.jpeg",
  "IMG_2822.jpeg",
  "IMG_7606.jpeg",
  "IMG_8127.jpeg",
  "IMG_0736.jpeg",
  "IMG_1012.jpeg",
  "IMG_2970.jpeg",
  "IMG_2984.jpeg",
  "IMG_7340.jpeg",
  "IMG_7355.jpeg",
  "IMG_C82CFDEE7140-1.jpeg",
  "IMG_0012.jpeg",
  "lobabobapitch.jpg",
];

function fileFromGallerySrc(src: string): string {
  const prefix = "/gallery/";
  if (!src.startsWith(prefix)) return src;
  return decodeURIComponent(src.slice(prefix.length));
}

function sortMentorItems(items: GalleryItem[]): GalleryItem[] {
  const rank = new Map(MENTOR_FILE_ORDER.map((f, i) => [f, i]));
  return [...items].sort((a, b) => {
    const fa = fileFromGallerySrc(a.src);
    const fb = fileFromGallerySrc(b.src);
    const ra = rank.has(fa) ? rank.get(fa)! : 10_000;
    const rb = rank.has(fb) ? rank.get(fb)! : 10_000;
    if (ra !== rb) return ra - rb;
    return fa.localeCompare(fb);
  });
}

export const gallerySections: GallerySection[] = ALBUM_ORDER.map((id) => {
  let items = GALLERY_MANIFEST.filter((row) => row.album === id).map(rowToItem);
  if (id === "mentors") {
    items = sortMentorItems(items);
  }
  return {
    id,
    heading: SECTION_HEADINGS[id],
    items,
  };
});

export function getGallerySection(
  id: GallerySectionId,
): GallerySection | undefined {
  return gallerySections.find((s) => s.id === id);
}

/**
 * Pick an album's hub cover:
 *   1. the manifest row in that album with `thumbnail: true`
 *   2. otherwise, the first item in the album
 * Returns `undefined` only if the album is empty.
 */
export function getAlbumCover(id: GallerySectionId): GalleryItem | undefined {
  const section = getGallerySection(id);
  if (!section) return undefined;
  const flagged = GALLERY_MANIFEST.find(
    (row) => row.album === id && row.thumbnail === true,
  );
  if (flagged) {
    const match = section.items.find(
      (item) => fileFromGallerySrc(item.src) === flagged.file,
    );
    if (match) return match;
  }
  return section.items[0];
}

/** Flat list in album order (me → mentors → misc). */
export const galleryItems: GalleryItem[] = gallerySections.flatMap(
  (s) => s.items,
);
