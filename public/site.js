lucide.createIcons();

    (function () {
      const map = {
        home: "/",
        garantia: "/seguro-garantia",
        credito: "/seguro-de-credito",
        prestamista: "/prestamista-imobiliario-cnsp-447",
        responsabilidade: "/seguros-de-responsabilidade"
      };
      const path = location.pathname.replace(/\/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "") || "/";
      document.querySelectorAll(".nav-link").forEach((el) => {
        const key = el.getAttribute("data-nav");
        const on = map[key] === path;
        el.classList.toggle("text-gold-400", on);
        el.classList.toggle("bg-white/5", on);
        el.classList.toggle("text-slate-300", !on);
      });
      const year = document.getElementById("year");
      if (year) year.textContent = String(new Date().getFullYear());
    })();

    function toggleMobileMenu() {
      document.getElementById("mobile-menu").classList.toggle("hidden");
    }

    function openContactModal(contextTitle) {
      const modal = document.getElementById("contact-modal");
      const titleEl = document.getElementById("modal-title");
      if (contextTitle && titleEl) titleEl.textContent = contextTitle;
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }

    function closeContactModal() {
      document.getElementById("contact-modal").classList.add("hidden");
      document.body.style.overflow = "";
    }

    function submitLeadForm(e) {
      e.preventDefault();
      const solucao = document.getElementById("lead-solucao").value;
      const nome = document.getElementById("lead-nome").value;
      const empresa = document.getElementById("lead-empresa").value;
      const contexto = document.getElementById("lead-contexto").value;
      const baseMsg = "Olá! Vim pelo site segurosfinanceiros.com.br e gostaria de conversar com um especialista.\n\n*Interesse:* " + solucao + "\n*Nome/Cargo:* " + nome + "\n*Empresa:* " + empresa + (contexto ? "\n*Contexto:* " + contexto : "");
      const waUrl = "https://wa.me/5511992545976?text=" + encodeURIComponent(baseMsg);
      window.open(waUrl, "_blank", "noopener");
      closeContactModal();
    }

    document.getElementById("contact-modal")?.addEventListener("click", (e) => {
      if (e.target.id === "contact-modal") closeContactModal();
    });
