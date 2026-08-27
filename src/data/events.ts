import type { Event } from "../types/Event";
import rockefellerImage from "../assets/rockefeller.png";
import youngstorgetImage from "../assets/youngstorget.png";
import munchImage from "../assets/munch.png";

export const events: Event[] = [
  {
    id: 1,
    title: "Konsert på Rockefeller",
    category: "music",
    venue: "Rockefeller",
    address: "Mariboes gate 5B, 0183 Oslo",
    date: "2026-08-29",
    time: "20:00",
    price: 450,
    image: rockefellerImage,
    description:
      "Opplev en energisk konsertkveld på Rockefeller midt i Oslo sentrum.",
    accessibility:
      "Dersom du bruker rullestol, har helsemessige årsaker som gjør at du ikke kan stå under arrangementet, eller trenger annen tilrettelegging, og har HC-bevis eller legeerklæring, ber vi deg kontakte oss på e-post så tidlig som mulig. Det er viktig at dette gjøres minst én virkedag før arrangementet, slik at vi kan få oversikt og tilrettelegge på best mulig måte. For arrangementer i helgen må vi motta din henvendelse senest fredag kl. 16.00.",
    ticketUrl: "https://example.com",
  },
  {
    id: 2,
    title: "Street Food Festival",
    category: "food",
    venue: "Youngstorget",
    address: "Youngstorget 3, 0181 Oslo",
    date: "2026-08-30",
    time: "12:00",
    price: 0,
    image: youngstorgetImage,
    description:
      "Smak deg gjennom street food fra ulike deler av verden på Youngstorget.",
    accessibility:
      "Arrangementet foregår på et flatt uteområde med god fremkommelighet for rullestol.",
  },
  {
    id: 3,
    title: "Kunst på MUNCH",
    category: "culture",
    venue: "MUNCH",
    address: "Edvard Munchs Plass 1, 0194 Oslo",
    date: "2026-08-30",
    time: "10:00",
    price: 180,
    image: munchImage,
    description:
      "Utforsk kunst og utstillinger på MUNCH med utsikt over Bjørvika og Oslofjorden.",
    accessibility:
      "MUNCH er tilrettelagt for bevegelseshemmede besøkende, inkludert deg som trenger store elektriske rullestoler, og er generelt bygget etter dagens krav til universell utforming.",
    ticketUrl: "https://example.com",
  },
];
