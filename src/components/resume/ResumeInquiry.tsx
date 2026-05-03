"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { Mail, X } from "lucide-react";

const FORMSPREE_ACTION = "https://formspree.io/f/xvzdyzpy";

const defaultMessage =
  "Hi — could you please send me your latest resume (PDF)? Thank you.";

type ResumeInquiryContextValue = {
  open: () => void;
};

const ResumeInquiryContext = createContext<ResumeInquiryContextValue | null>(
  null,
);

export function useResumeInquiry() {
  const ctx = useContext(ResumeInquiryContext);
  if (!ctx) {
    throw new Error("useResumeInquiry must be used within ResumeInquiryProvider");
  }
  return ctx;
}

export function ResumeInquiryProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const openModal = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <ResumeInquiryContext.Provider value={{ open: openModal }}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-100 flex items-end justify-center p-4 sm:items-center sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm dark:bg-black/70"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-inquiry-title"
            className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-secondary p-6 shadow-2xl dark:bg-slate-900 sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-lg p-1 text-body-secondary transition hover:bg-primary hover:text-text-primary"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex items-start gap-3 pr-8">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Mail className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2
                  id="resume-inquiry-title"
                  className="text-xl font-semibold text-text-primary"
                >
                  Request latest resume
                </h2>
                <p className="mt-1 text-sm text-body-secondary leading-relaxed">
                  Send this form and I will email you the most up-to-date PDF.
                </p>
              </div>
            </div>

            <form action={FORMSPREE_ACTION} method="POST" className="space-y-4">
              <input type="hidden" name="_subject" value="Resume PDF request — portfolio" />

              <div>
                <label
                  htmlFor="resume-inquiry-name"
                  className="mb-1.5 block text-sm font-semibold text-body-secondary"
                >
                  Name
                </label>
                <input
                  id="resume-inquiry-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-border bg-primary px-4 py-2.5 text-sm text-text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="resume-inquiry-email"
                  className="mb-1.5 block text-sm font-semibold text-body-secondary"
                >
                  Email
                </label>
                <input
                  id="resume-inquiry-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-border bg-primary px-4 py-2.5 text-sm text-text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="resume-inquiry-message"
                  className="mb-1.5 block text-sm font-semibold text-body-secondary"
                >
                  Message
                </label>
                <textarea
                  id="resume-inquiry-message"
                  name="message"
                  rows={4}
                  required
                  defaultValue={defaultMessage}
                  className="w-full rounded-xl border border-border bg-primary px-4 py-2.5 text-sm text-text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:bg-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover dark:text-slate-950"
                >
                  Send request
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </ResumeInquiryContext.Provider>
  );
}

type ResumeRequestButtonProps = {
  className?: string;
};

export function ResumeRequestButton({ className }: ResumeRequestButtonProps) {
  const { open } = useResumeInquiry();
  return (
    <button
      type="button"
      onClick={open}
      className={
        className ??
        "inline-flex items-center justify-center gap-2 rounded-lg border-2 border-accent bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover hover:border-accent-hover dark:text-slate-900"
      }
    >
      <Mail className="h-4 w-4" aria-hidden />
      Request latest resume
    </button>
  );
}

export function ResumeRequestLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { open } = useResumeInquiry();
  return (
    <button
      type="button"
      onClick={open}
      className={
        className ??
        "font-medium text-accent hover:text-accent-hover underline-offset-2 hover:underline"
      }
    >
      {children ?? "Request my latest resume"}
    </button>
  );
}
