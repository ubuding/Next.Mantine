import { Link } from "$/i18n/navigation";
import { useTranslations } from "next-intl";
import "./style.scss";

export const About = () => {
  const t = useTranslations("Index");
  return (
    <div className="about-page">
      <div className="item">
        {/* Modular development */}
        <h2 className="title">Modular development</h2>
        <div className="content">
          <div>
            Using a modular development approach, App Router is only used as a
            routing file.
          </div>
          <div>
            In the modules file, each module is divided into modules, and each
            module contains its corresponding services, state management, pages,
            and other components, images, etc.
          </div>
        </div>
        <div className="directory">
          - module
          <div className="directory-2">
            <div>- images</div>
            <div>- components</div>
            <div>
              - pages
              <div className="directory-2">
                <div>- index.tsx</div>
                <div>- style.scss</div>
              </div>
            </div>
            <div>- service</div>
            <div>- store</div>
          </div>
        </div>
      </div>

      {/* Path Aliases */}
      <div className="item">
        <h2 className="title">Path Aliases</h2>
        <div className="content">
          <div>For easier development, path aliases are needed</div>
          <div>{"$: /src"}</div>
          <div>{"@: /src/modules"}</div>
          <div>{"#: /src/components"}</div>
        </div>
      </div>

      {/* State Management */}
      <div className="item">
        <h2 className="title">State Management</h2>
        <div className="content">
          <div>Use zustand for cross-module state management</div>
        </div>
      </div>

      {/* Switch Theme */}
      <div className="item">
        <h2 className="title">Switch Theme</h2>
        <div className="content">
          <div>
            {
              "Use mantine's built-in method with CSS3 var method to reset color variables"
            }
          </div>
        </div>
      </div>

      {/* International Language */}
      <div className="item">
        <h2 className="title">International Language</h2>
        <div className="content">
          <div>
            {"Use next-intl for internationalization.  >>"}
            <Link
              href="/about"
              locale="en"
              style={{
                margin: "0 12px",
              }}
            >
              EN
            </Link>
            <Link href="/about" locale="zh">
              ZH
            </Link>
          </div>
        </div>
      </div>

      {/* Request interception */}
      <div className="item">
        <h2 className="title">Request interception</h2>
        <div className="content">
          <div>{"Use axios for pre-request and post-response processing."}</div>
        </div>
      </div>

      {/* Coding Standards */}
      <div className="item">
        <h2 className="title">Coding Standards</h2>
        <div className="content">
          <div>Use husky to check before submitting the code</div>
          <div>
            such as commitlint to standardize the submission information, and
            lintstage with eslint and prettier to check and format the code.
          </div>
        </div>
      </div>
    </div>
  );
};
