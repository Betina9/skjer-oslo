import type { Event } from "../types/Event";
import rockefellerImage from "../assets/events/rockefeller.png";
import youngstorgetImage from "../assets/events/youngstorget.png";
import munchImage from "../assets/events/munch.png";
import blaaImage from "../assets/events/Bla.png";
import cosmopoliteImage from "../assets/events/Cosmopolite.png";
import parkteatretImage from "../assets/events/Parkteateret.png";
import johnDeeImage from "../assets/events/JohnDee.png";
import sentrumSceneImage from "../assets/events/SentrumScene.png";
import kulturhusetImage from "../assets/events/Kulturhuset.png";
import vippaImage from "../assets/events/Vippa.png";
import mathallenImage from "../assets/events/Mathallen.png";
import saltImage from "../assets/events/Salt.png";
import sofienbergparkenImage from "../assets/events/Sofienbergparken.png";
import toyenImage from "../assets/events/Toyen.png";
import vulkanImage from "../assets/events/Vulkan.png";
import akerbryggeImage from "../assets/events/AkerBrygge.png";
import torvImage from "../assets/events/Torv.png";
import toyen2Image from "../assets/events/Toyen2.png";
import kulturdagImage from "../assets/events/Kulturdag.png";
import barcodeImage from "../assets/events/Barcode.png";
import bjorvikaImage from "../assets/events/Bjorvika.png";
import designImage from "../assets/events/Design.png";
import fotografenImage from "../assets/events/Fotografien.png";
import grefsenskollenImage from "../assets/events/Grefsenkollen.png";
import akerselvaImage from "../assets/events/Akerselva.png";
import bygdoyImage from "../assets/events/Bygdøy.png";
import frognerparkenImage from "../assets/events/Frogneparken.png";
import klatresenterImage from "../assets/events/Klatresenter.png";
import oslofjordenImage from "../assets/events/Oslofjorden.png";

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
  {
    id: 4,
    title: "Sommerkonsert i Oslo",
    category: "music",
    venue: "Sentrum Scene",
    address: "Arbeidersamfunnets plass 1, 0181 Oslo",
    date: "2026-09-02",
    time: "19:30",
    price: 395,
    image: sentrumSceneImage,
    description:
      "En stemningsfull konsertkveld med live musikk midt i Oslo sentrum.",
    accessibility:
      "Lokalet har tilgjengelig inngang og tilrettelegging for besøkende med nedsatt bevegelsesevne.",
    ticketUrl: "https://example.com",
  },
  {
    id: 5,
    title: "Matmarked på Vulkan",
    category: "food",
    venue: "Vulkan",
    address: "Vulkan 5, 0178 Oslo",
    date: "2026-09-03",
    time: "12:00",
    price: 0,
    image: vulkanImage,
    description:
      "Oppdag lokale smaker, små produsenter og spennende mat på Vulkan.",
    accessibility:
      "Arrangementet foregår på et område med trinnfri adkomst og god fremkommelighet.",
  },
  {
    id: 6,
    title: "Kunstkveld i Bjørvika",
    category: "culture",
    venue: "Bjørvika",
    address: "Operagata, 0194 Oslo",
    date: "2026-09-04",
    time: "18:00",
    price: 150,
    image: bjorvikaImage,
    description:
      "Opplev en kveld fylt med samtidskunst, installasjoner og kreativitet i Bjørvika.",
    accessibility:
      "Området har trinnfri adkomst og gode muligheter for fremkommelighet med rullestol.",
    ticketUrl: "https://example.com",
  },
  {
    id: 7,
    title: "Morgenyoga i Frognerparken",
    category: "activity",
    venue: "Frognerparken",
    address: "Kirkeveien, 0268 Oslo",
    date: "2026-09-05",
    time: "09:00",
    price: 0,
    image: frognerparkenImage,
    description:
      "Start dagen med en rolig yogatime utendørs i grønne omgivelser.",
    accessibility:
      "Aktiviteten foregår på gress. Instruktøren kan tilpasse enkelte øvelser ved behov.",
  },
  {
    id: 8,
    title: "Indiekveld på Blå",
    category: "music",
    venue: "Blå",
    address: "Brenneriveien 9C, 0182 Oslo",
    date: "2026-09-05",
    time: "20:00",
    price: 320,
    image: blaaImage,
    description:
      "En kveld med nye indieartister og levende musikk langs Akerselva.",
    accessibility:
      "Lokalet har tilgjengelig inngang. Kontakt arrangøren på forhånd ved behov for særskilt tilrettelegging.",
    ticketUrl: "https://example.com",
  },
  {
    id: 9,
    title: "Smaker fra Asia",
    category: "food",
    venue: "SALT",
    address: "Langkaia 1, 0150 Oslo",
    date: "2026-09-06",
    time: "13:00",
    price: 0,
    image: saltImage,
    description:
      "Utforsk matboder med retter inspirert av ulike deler av Asia.",
    accessibility:
      "Store deler av området er tilgjengelig med rullestol, men enkelte underlag kan være ujevne.",
  },
  {
    id: 10,
    title: "Historisk vandring i Kvadraturen",
    category: "culture",
    venue: "Christiania Torv",
    address: "Christiania Torv, 0157 Oslo",
    date: "2026-09-06",
    time: "14:00",
    price: 120,
    image: torvImage,
    description:
      "Bli med på en guidet vandring gjennom noen av Oslos eldste gater.",
    accessibility:
      "Turen foregår utendørs på fortau og brostein. Ta kontakt med arrangøren ved behov for tilpasset rute.",
    ticketUrl: "https://example.com",
  },
  {
    id: 11,
    title: "Kajakk på Oslofjorden",
    category: "activity",
    venue: "Sørenga",
    address: "Sørengkaia, 0194 Oslo",
    date: "2026-09-07",
    time: "11:00",
    price: 350,
    image: oslofjordenImage,
    description:
      "Se Oslo fra vannet på en guidet kajakktur langs Bjørvika og Sørenga.",
    accessibility:
      "Aktiviteten krever at deltakere kan gå inn og ut av kajakken. Kontakt arrangøren for spørsmål om tilrettelegging.",
    ticketUrl: "https://example.com",
  },
  {
    id: 12,
    title: "Jazzkveld på Cosmopolite",
    category: "music",
    venue: "Cosmopolite Scene",
    address: "Vogts gate 64, 0477 Oslo",
    date: "2026-09-08",
    time: "19:00",
    price: 410,
    image: cosmopoliteImage,
    description:
      "Nyt en kveld med jazz og levende musikk på Cosmopolite Scene.",
    accessibility:
      "Lokalet har tilrettelagt inngang og tilgjengelige publikumsområder.",
    ticketUrl: "https://example.com",
  },
  {
    id: 13,
    title: "Designmarked på Grünerløkka",
    category: "culture",
    venue: "Grünerløkka",
    address: "Thorvald Meyers gate, 0555 Oslo",
    date: "2026-09-09",
    time: "11:00",
    price: 0,
    image: designImage,
    description:
      "Møt lokale designere og finn kunst, illustrasjoner, klær og håndlagde produkter.",
    accessibility:
      "Markedet foregår hovedsakelig på gateplan med god fremkommelighet.",
  },
  {
    id: 14,
    title: "Smak av Oslo",
    category: "food",
    venue: "Aker Brygge",
    address: "Bryggegata, 0250 Oslo",
    date: "2026-09-10",
    time: "12:00",
    price: 95,
    image: akerbryggeImage,
    description:
      "En matdag med lokale restauranter, småretter og smaker fra hele byen.",
    accessibility: "Aker Brygge har trinnfri adkomst og god fremkommelighet.",
    ticketUrl: "https://example.com",
  },
  {
    id: 15,
    title: "Kveldstur langs Akerselva",
    category: "activity",
    venue: "Akerselva",
    address: "Maridalsveien, 0175 Oslo",
    date: "2026-09-10",
    time: "18:30",
    price: 0,
    image: akerselvaImage,
    description:
      "Bli med på en sosial kveldstur langs Akerselva gjennom flere av Oslos bydeler.",
    accessibility:
      "Ruten følger hovedsakelig gangveier, men enkelte partier kan ha bakker og ujevnt underlag.",
  },
  {
    id: 16,
    title: "Elektronisk natt",
    category: "music",
    venue: "Parkteatret",
    address: "Olaf Ryes plass 11, 0552 Oslo",
    date: "2026-09-11",
    time: "21:00",
    price: 290,
    image: parkteatretImage,
    description:
      "Elektroniske rytmer og liveartister fyller Parkteatret gjennom kvelden.",
    accessibility:
      "Lokalet tilbyr tilrettelegging for gjester med nedsatt bevegelsesevne.",
    ticketUrl: "https://example.com",
  },
  {
    id: 17,
    title: "Fotoutstilling: Oslo etter mørket",
    category: "culture",
    venue: "Fotografiens Hus",
    address: "Rådhusgata 20, 0151 Oslo",
    date: "2026-09-12",
    time: "12:00",
    price: 100,
    image: fotografenImage,
    description:
      "En fotoutstilling som viser Oslo og bylivet etter at solen har gått ned.",
    accessibility:
      "Utstillingen har tilgjengelig inngang og kan besøkes med rullestol.",
    ticketUrl: "https://example.com",
  },
  {
    id: 18,
    title: "Brunsjfestival",
    category: "food",
    venue: "Tøyen",
    address: "Tøyen torg, 0652 Oslo",
    date: "2026-09-12",
    time: "10:00",
    price: 0,
    image: toyenImage,
    description:
      "Kaffe, bakst og brunsjretter samles på Tøyen for en hyggelig matfestival.",
    accessibility:
      "Arrangementet foregår på et tilgjengelig uteområde med trinnfri adkomst.",
  },
  {
    id: 19,
    title: "Sykkeltur rundt Bygdøy",
    category: "activity",
    venue: "Bygdøy",
    address: "Huk Aveny, 0287 Oslo",
    date: "2026-09-13",
    time: "11:00",
    price: 75,
    image: bygdoyImage,
    description: "Opplev Bygdøy på to hjul sammen med en lokal guide.",
    accessibility:
      "Aktiviteten krever bruk av sykkel. Kontakt arrangøren dersom du har spørsmål om alternative sykler eller tilrettelegging.",
    ticketUrl: "https://example.com",
  },
  {
    id: 20,
    title: "Akustisk søndag",
    category: "music",
    venue: "Kulturhuset",
    address: "Youngs gate 6, 0181 Oslo",
    date: "2026-09-13",
    time: "18:00",
    price: 220,
    image: kulturhusetImage,
    description:
      "En rolig søndagskveld med akustiske konserter fra lokale artister.",
    accessibility:
      "Lokalet har trinnfri adkomst og tilgjengelige publikumsområder.",
    ticketUrl: "https://example.com",
  },
  {
    id: 21,
    title: "Gatekunst på Tøyen",
    category: "culture",
    venue: "Tøyen",
    address: "Hagegata, 0653 Oslo",
    date: "2026-09-14",
    time: "15:00",
    price: 0,
    image: toyen2Image,
    description:
      "Oppdag gatekunst og veggmalerier på en guidet tur gjennom Tøyen.",
    accessibility:
      "Turen foregår på offentlige fortau og gangveier og kan tilpasses ved behov.",
  },
  {
    id: 22,
    title: "Pizza og musikk",
    category: "food",
    venue: "Vippa",
    address: "Akershusstranda 25, 0150 Oslo",
    date: "2026-09-15",
    time: "17:00",
    price: 0,
    image: vippaImage,
    description:
      "En uformell kveld med pizza, forskjellige matboder og musikk ved fjorden.",
    accessibility:
      "Området har trinnfri adkomst og tilgjengelige sitteplasser.",
  },
  {
    id: 23,
    title: "Klatredag",
    category: "activity",
    venue: "Oslo Klatresenter",
    address: "Olaf Helsets vei 5, 0694 Oslo",
    date: "2026-09-16",
    time: "16:00",
    price: 250,
    image: klatresenterImage,
    description:
      "Prøv klatring med instruktør i et sosialt og inkluderende miljø.",
    accessibility:
      "Senteret har tilgjengelige fellesområder. Kontakt arrangøren for informasjon om tilpasset klatring.",
    ticketUrl: "https://example.com",
  },
  {
    id: 24,
    title: "Norsk popkveld",
    category: "music",
    venue: "Sentrum Scene",
    address: "Arbeidersamfunnets plass 1, 0181 Oslo",
    date: "2026-09-17",
    time: "20:00",
    price: 475,
    image: sentrumSceneImage,
    description: "En konsertkveld med norsk pop og nye artister på scenen.",
    accessibility:
      "Lokalet har mulighet for tilrettelegging. Kontakt arrangøren før arrangementet ved spesielle behov.",
    ticketUrl: "https://example.com",
  },
  {
    id: 25,
    title: "Arkitekturvandring i Barcode",
    category: "culture",
    venue: "Barcode",
    address: "Dronning Eufemias gate, 0191 Oslo",
    date: "2026-09-18",
    time: "17:00",
    price: 140,
    image: barcodeImage,
    description:
      "Lær mer om arkitekturen og utviklingen av Barcode og Bjørvika.",
    accessibility:
      "Ruten går på brede fortau og flate gangområder og er egnet for rullestol.",
    ticketUrl: "https://example.com",
  },
  {
    id: 26,
    title: "Vegetarfestival",
    category: "food",
    venue: "Sofienbergparken",
    address: "Sofienberggata, 0558 Oslo",
    date: "2026-09-19",
    time: "11:00",
    price: 0,
    image: sofienbergparkenImage,
    description:
      "Oppdag vegetariske retter, lokale produsenter og nye smaker i Sofienbergparken.",
    accessibility:
      "Festivalen foregår utendørs. Hovedområdene kan nås via asfalterte gangveier.",
  },
  {
    id: 27,
    title: "Tur til Grefsenkollen",
    category: "activity",
    venue: "Grefsenkollen",
    address: "Grefsenkollveien 100, 0490 Oslo",
    date: "2026-09-20",
    time: "10:00",
    price: 0,
    image: grefsenskollenImage,
    description: "Bli med på en sosial søndagstur med utsikt over Oslo.",
    accessibility: "Turen går i kupert terreng og er ikke egnet for rullestol.",
  },
  {
    id: 28,
    title: "Rockekveld i Oslo",
    category: "music",
    venue: "John Dee",
    address: "Mariboes gate 5B, 0183 Oslo",
    date: "2026-09-20",
    time: "20:00",
    price: 360,
    image: johnDeeImage,
    description:
      "En energisk kveld med rock, gitarer og liveopptredener midt i Oslo.",
    accessibility:
      "Kontakt arrangøren på forhånd dersom du trenger tilrettelegging under arrangementet.",
    ticketUrl: "https://example.com",
  },
  {
    id: 29,
    title: "Kulturdag på Grønland",
    category: "culture",
    venue: "Grønland",
    address: "Grønlandsleiret, 0190 Oslo",
    date: "2026-09-21",
    time: "12:00",
    price: 0,
    image: kulturdagImage,
    description:
      "En åpen kulturdag med kunst, musikk og aktiviteter for hele byen.",
    accessibility:
      "Arrangementet foregår hovedsakelig på gateplan og har tilgjengelige publikumsområder.",
  },
  {
    id: 30,
    title: "Høstmarked på Mathallen",
    category: "food",
    venue: "Mathallen Oslo",
    address: "Vulkan 5, 0178 Oslo",
    date: "2026-09-22",
    time: "11:00",
    price: 0,
    image: mathallenImage,
    description:
      "Oppdag høstens smaker med lokale råvarer, småretter og matprodusenter.",
    accessibility: "Mathallen har trinnfri adkomst og tilgjengelige toaletter.",
  },
];
