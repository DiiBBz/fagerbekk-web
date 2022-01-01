import media1 from "../../public/images/foniks.jpg";
import media2 from "../../public/images/foniks.jpg";
import media3 from "../../public/images/foniks.jpg";
import media4 from "../../public/images/foniks.jpg";
import media5 from "../../public/images/foniks.jpg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
