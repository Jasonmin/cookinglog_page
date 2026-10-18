(function () {
  const STORAGE_KEY = "cookinglog-page-lang";
  const buttons = document.querySelectorAll("[data-set-lang]");
  const sections = document.querySelectorAll("[data-lang]");

  function setLang(code) {
    sections.forEach((el) => {
      el.classList.toggle("active", el.getAttribute("data-lang") === code);
    });
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-set-lang") === code);
    });
    document.documentElement.lang = code === "zh" ? "zh-Hans" : "en";
    try { localStorage.setItem(STORAGE_KEY, code); } catch (_) {}
  }

  const saved = (() => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
  })();
  const browserZh = (navigator.language || "").toLowerCase().startsWith("zh");
  setLang(saved === "zh" || (!saved && browserZh) ? "zh" : saved === "en" ? "en" : (browserZh ? "zh" : "en"));

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-set-lang")));
  });
})();
