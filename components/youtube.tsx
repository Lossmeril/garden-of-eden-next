import { useTranslation } from "react-i18next";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const YouTubeTrailer = () => {
  const { t } = useTranslation();

  return (
    <LiteYouTubeEmbed
      id={t("trailerLink")}
      title={t("trailerVideoTitle")}
      thumbnail={"/img/thumbnail" + t("trailerThumbnailSuffix") + ".webp"}
    />
  );
};

export default YouTubeTrailer;
