import { library } from "@fortawesome/fontawesome-svg-core";

import {
  fab,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const initFontAwesome = () => {
  library.add(fab, faFacebookF, faInstagram, faTwitter, faYoutube);
};

export default initFontAwesome;
