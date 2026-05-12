const translations = {
  en: {
    logo_name: "Hercules",
    nav_home: "Home",
    nav_services: "Services",
    nav_contact: "Contact Us",
    hero_title: "Hercules Stainless Steel",
    hero_subtitle: "Stainless Steel Products & Kitchenware Manufacturing",
    service1_title: "Kitchen Sinks",
    service1_desc:'Custom-built, high-grade stainless steel sinks designed for superior durability and seamless integration into commercial kitchens. \n\n Single, Double',
    service2_title: "Work Tables",
    service2_desc:"Heavy-duty prep surfaces engineered for maximum stability and hygiene in high-volume food service environments.",
    service3_title: "Shelves",
    service3_desc:"Robust, space-saving storage solutions tailored to organize your workspace with industrial-strength load capacities.",
    service4_title: "Cabinets",
    service4_desc:"Precision-crafted enclosed storage units that offer a sleek, organized look while protecting your essential equipment from dust and moisture.",
    service5_title: "Kitchen Hoods",
    service5_desc:"High-performance ventilation systems designed to efficiently manage airflow, smoke, and heat for a safer cooking environment.",
    service6_title: "Handrails",
    service6_desc:"Sturdy and ergonomically designed safety railings that combine modern aesthetics with rigorous structural standards.",
    service7_title: "Air Ducts",
    service7_desc:"Custom-fabricated HVAC ductwork optimized for maximum airflow efficiency and long-term environmental control.",
    service8_title: "Repairs and More",
    service8_desc:"Expert restoration and miscellaneous metalwork services to maintain, fix, or customize your existing stainless steel assets.",
    send_quote: "Request a Quote"
  },
  zh: {
    logo_name: "鑽石不銹鋼",
    nav_home: "首页",
    nav_services: "服务项目",
    nav_contact: "联系我们",
    hero_title: "鑽石不銹鋼廚具廠",
    hero_subtitle: "不锈钢制品及厨具制造",
    service1_title: "廚房水槽",
    service1_desc:"訂製的高級不銹鋼水槽，設計精良，經久耐用，可完美融入商業廚房 \n\n槽單，雙槽",
    service2_title: "工作台",
    service2_desc:"專為高客流量餐飲服務環境而設計的重型備餐檯面，可實現最大的穩定性和衛生性",
    service3_title: "貨架",
    service3_desc:"堅固耐用、節省空間的儲存解決方案，可根據您的工作空間需求量身定制，並具備工業級的承重能力。",
    service4_title: "櫥櫃",
    service4_desc:"精密打造的封閉式收納單元，外觀時尚整潔，同時保護您的重要設備免受灰塵和潮濕的侵襲",
    service5_title: "抽油煙機",
    service5_desc:"高性能通風系統旨在有效管理氣流、煙霧和熱量，從而創造更安全的烹飪環境",
    service6_title: "扶手",
    service6_desc:"堅固耐用且符合人體工學的安全護欄，兼具現代美學和嚴格的結構標準",
    service7_title: "風管",
    service7_desc:"客製化的暖通空調風管系統，優化設計以實現最大氣流效率和長期環境控制",
    service8_title: "維修",
    service8_desc:"提供專業的修復和各種金屬加工服務，以維護、修理或客製化您現有的不銹鋼資產",
    send_quote: "請求報價"

  },
};

function updateContent(lang) {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

function updateToggleUI(lang) {
  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("zh-btn").classList.toggle("active", lang === "zh");
}

function setLanguage(lang) {
  localStorage.setItem("preferredLang", lang);
  updateContent(lang);
  updateToggleUI(lang);
}

// Initialization on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  setLanguage(savedLang);
});


