import { useTranslation } from "react-i18next";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const SupportVideo = () => {
  const { t } = useTranslation();

  return (
    <LiteYouTubeEmbed
      id={t("huBV9SjjYJ0")}
      title={t("supportVideoTitle")}
      thumbnail={"/img/supportthumbnail.jpg"}
    />
  );
};
export default SupportVideo;
