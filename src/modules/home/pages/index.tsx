import { Button } from "@mantine/core";
import { useTranslations } from "next-intl";
import { Link } from "$/i18n/navigation";
import "./style.scss";
export const Home = () => {
  const t = useTranslations("Index");
  return (
    <div className="home-page">
      <h1>{t("title")}</h1>
      <Button variant="filled">ZH</Button>

      <Link href="/" locale="en">
        EN
      </Link>
      <Link href="/" locale="zh">
        ZH
      </Link>
    </div>
  );
};
