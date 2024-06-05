import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Servicos from "./topComponents/servicos";
import CasosDeUso from "./topComponents/casosdeuso";
import Solucoes from "./topComponents/solucoes";

export const ShiftingDropDown = () => {
  return (
    <div className="flex items-center justify-around h-full w-full bg-fixed col-span-3">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className=" flex h-full w-full justify-center gap-4"
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
            title={t.title}
          >
            {t.title}
            {selected === t.id && t.title != "F" ? (
              <AnimatePresence>
                {selected && (
                  <Content dir={dir} selected={selected} title={t.title} />
                )}
              </AnimatePresence>
            ) : (
              ""
            )}
          </Tab>
        );
      })}
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected, title }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`relative flex whitespace-nowrap items-center gap-1 rounded-full px-4 py-1.5 text-md transition duration-300
       text-neutral-800 z-50 hover:text-white hover:bg-sky-400`}
    >
      <span>{children}</span>
      {title != "F" ? (
        <FiChevronUp
          className={`transition-transform ${
            selected === tab ? "rotate-180 delay-50 duration-300" : ""
          }`}
        />
      ) : (
        ""
      )}
    </button>
  );
};

const Content = ({ selected, dir, title }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className={`absolute top-14 rounded-lg bg-sky-400 p-4 ${
        title == "Preços" || title == "Instagram"
          ? "-left-0"
          : title == "Soluções Empresariais"
          ? "-left-52 w-[650px]"
          : title == "Unidades"
          ? "-left-36"
          : ""
      }`}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-400 bg-neutral-400"
    ></motion.span>
  );
};

//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------

const F = () => {
  return <></>;
};

const TABS = [
  {
    title: "Solucoes",
    Component: Solucoes,
  },
  {
    title: "Servicos Personalizados",
    Component: Servicos,
  },

  {
    title: "Casos de Uso",
    Component: CasosDeUso,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
