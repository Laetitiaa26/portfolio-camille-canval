import { useState } from "react";
import { CheckCircleIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.3em] text-gold">CONTACT</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">On en parle ?</h2>
        <p className="mx-auto mt-5 max-w-md text-white/60">
          Un projet, une question, ou juste envie de dire bonjour. Écrivez-moi, je réponds vite.
        </p>
      </Reveal>

      {submitted ? (
        <Reveal className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-xl border border-gold/30 bg-panel px-8 py-12">
          <CheckCircleIcon className="h-12 w-12 text-gold" />
          <h3 className="font-display text-2xl font-semibold">C'est envoyé !</h3>
          <p className="text-white/60">
            Merci {name || ""}, je le lis et je reviens vers vous dès que possible.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-2 text-sm font-semibold text-gold transition hover:text-gold-light"
          >
            Envoyer un autre message
          </button>
        </Reveal>
      ) : (
        <Reveal delay={150}>
        <form className="mx-auto mt-10 grid max-w-xl gap-4 text-left" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="rounded-md border border-white/15 bg-panel px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="rounded-md border border-white/15 bg-panel px-4 py-3 text-sm outline-none transition focus:border-gold"
            />
          </div>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Parlez-moi de votre projet"
            rows={4}
            className="rounded-md border border-white/15 bg-panel px-4 py-3 text-sm outline-none transition focus:border-gold"
          />
          <button
            type="submit"
            className="mx-auto mt-2 rounded-md bg-gold px-8 py-3 text-sm font-semibold text-ink transition hover:bg-gold-light"
          >
            Envoyer le Message
          </button>
        </form>
        </Reveal>
      )}
    </section>
  );
}
