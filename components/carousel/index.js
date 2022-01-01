import media1 from "../../public/images/foniks1.jpg";
import media2 from "../../public/images/foniks2.jpg";
import media3 from "../../public/images/foniks3.jpg";
import media4 from "../../public/images/foniks4.jpg";
import media5 from "../../public/images/foniks5.jpg";
import media6 from "../../public/images/foniks6.jpg";

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = index => media[index % media.length];
