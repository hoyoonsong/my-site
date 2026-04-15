/**
 * “Some of my favorite moments” on the home page.
 * - `title` — always shown under the photo
 * - `caption` — white hover overlay (omit for no overlay)
 */
export type HomeMoment = {
  src: string;
  alt: string;
  title: string;
  caption?: string;
};

export const HOME_MOMENTS: HomeMoment[] = [
  {
    src: "/about/idaho-legislature.png",
    alt: "Hoyoon Song at the rostrum in the Idaho State Capitol chamber",
    title: "Boys State / Nation alum",
    caption:
      "Appointed as Speaker of the House. Chosen as one of 100 out of 20,000 boys to represent Idaho at Boys Nation where I was elected to a top office of Secretary of the Senate",
  },
  {
    src: "/about/marching-band.png",
    alt: "Hoyoon Song in marching band uniform with shako and plume",
    title: "Drum Corps International performer",
    caption:
      "Drum Major for Bishop Kelly Marching Band and the Boise Gems Drum and Bugle Corps",
  },
  {
    src: "/gallery/IMG_7382.jpeg",
    alt: "Loba Boba — student-led boba shop and entrepreneurship project",
    title: "Idaho Entrepreneurs Challenge Winner",
    caption:
      "I'm a problem solver by training. Whether it be unhealthy drinks, rural/urban inequity, etc. I'm in it for the mission. not the money.",
  },
];
