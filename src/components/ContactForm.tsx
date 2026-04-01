"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const projectTypes = [
  "Kentsel Dönüşüm Uygulamaları",
  "Kat Karşılığı İnşaat Projeleri",
  "Konut Binaları Üretimi",
  "Villa ve Müstakil Ev Yapımı",
  "Diğer",
];

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      site: "karadenizinsaatvegayrimenkul.com.tr",
      name: `${(form.elements.namedItem("firstName") as HTMLInputElement).value} ${(form.elements.namedItem("lastName") as HTMLInputElement).value}`,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      source: "contact-page",
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle className="h-10 w-10 text-green-500" />
        </div>
        <h3
          className="mb-2 text-[24px] font-normal uppercase tracking-[1px] text-white"
          style={{ fontFamily: "var(--font-heading), 'Oswald', sans-serif" }}
        >
          Mesaj Gönderildi!
        </h3>
        <p className="text-gray-warm">
          İletişime geçtiğiniz için teşekkür ederiz. Kısa süre içinde size geri döneceğiz.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[#252525] px-0 py-[10px] text-[15px] text-[#999] placeholder-[#666] outline-none transition-colors focus:border-[#8e6d45]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClass}
            placeholder="Ad"
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClass}
            placeholder="Soyad"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="Telefon Numarası"
          />
        </div>
      </div>
      <div>
        <select
          id="projectType"
          name="projectType"
          className={`${inputClass} cursor-pointer`}
          defaultValue=""
        >
          <option value="" disabled>
            Bir hizmet seçin...
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Projeniz hakkında bize bilgi verin..."
        />
      </div>
      <div className="butn-dark">
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer disabled:opacity-50"
        >
          <span className="inline-flex items-center gap-2">
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Mesaj Gönder <ArrowRight className="h-4 w-4" />
              </>
            )}
          </span>
        </button>
      </div>
      {status === "error" && (
        <p className="text-center text-sm text-red-400">
          Bir sorun oluştu. Lütfen tekrar deneyin veya +90 535 490 57 28 numaralı telefondan bizi arayın.
        </p>
      )}
    </form>
  );
}
