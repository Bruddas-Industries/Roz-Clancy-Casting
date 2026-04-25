import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Talent Submission | How to Submit to Roz Clancy Casting",
  description:
    "Submission guidelines for Roz Clancy Casting & Productions. Learn how to submit your headshot and resume correctly. Mail-only submissions. Serving NJ and PA talent.",
};

const doList = [
  "Glue your headshot to your resume (do NOT staple)",
  "Clearly indicate SAG-AFTRA status on the outside of the envelope",
  "Include your regional identification — specify NJ, PA, or tri-state area",
  "Use a clear envelope if possible so your headshot is visible",
  "Include return postage and your return address if you want materials back",
  "Submit only when you are genuinely ready — a premature submission wastes everyone's time",
  "Include a brief, professional cover letter if you were personally invited",
];

const dontList = [
  "Do NOT call or email unsolicited about your submission",
  "Do NOT show up in person without a scheduled appointment",
  "Do NOT submit during November or December (holiday blackout period)",
  "Do NOT staple your headshot to your resume",
  "Do NOT send photos that are more than 6 months old",
  "Do NOT submit without SAG-AFTRA status clearly marked (if applicable)",
  "Do NOT send digital submissions unless you were personally invited",
];

const faq = [
  {
    q: "Can I email or call to follow up on my submission?",
    a: "No. Unsolicited calls and emails about submissions are not accepted. If we are interested, we will contact you. Calling to follow up will not help your chances — and may hurt them.",
  },
  {
    q: "Can I submit digitally or online?",
    a: "Digital submissions are only accepted from talent who have been personally invited by Roz or her assistant. All other submissions must be sent by mail to our Ewing, NJ office.",
  },
  {
    q: "How long does it take to hear back?",
    a: "There is no standard timeline. If your submission matches an open project, we will reach out. If you do not hear back within 60 days, your materials have been received but do not currently match our needs.",
  },
  {
    q: "Do you accept submissions for children and babies?",
    a: "Yes. We cast talent of all ages — babies through seniors. Children's submissions should include current photos, age, height, and any prior experience.",
  },
  {
    q: "Can I submit for a specific project or role?",
    a: "General submissions are welcome. If you become aware of a specific project casting through our office, please note it on your cover letter and envelope.",
  },
  {
    q: "Do you offer feedback on my headshots or resume?",
    a: "We do not provide unsolicited feedback on submissions. If you are enrolled in one of our training programs, feedback is part of the curriculum.",
  },
  {
    q: "Do you charge talent a fee to be represented?",
    a: "Legitimate casting directors do not charge talent a fee for consideration or inclusion in their roster. Roz Clancy Casting does not charge submission or registration fees.",
  },
];

export default function TalentSubmissionPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "radial-gradient(ellipse at 40% 50%, #1a1505 0%, #0D0D0D 70%)",
          borderBottom: "1px solid #2A2A2A",
        }}
        className="section-padding"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div style={{ width: "32px", height: "1px", background: "#C9A84C" }} />
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.25em", fontSize: "11px" }}
              className="font-semibold uppercase"
            >
              For Talent
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            We&apos;re Selective
            <br />
            <span style={{ color: "#C9A84C" }}>By Design.</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />
          <p style={{ color: "#9A9A9A" }} className="text-lg max-w-2xl leading-relaxed">
            If you&apos;re ready, we&apos;re ready. Read the submission guidelines
            carefully — following them correctly is the first test of your professionalism.
          </p>
        </div>
      </section>

      {/* Mailing address */}
      <section style={{ background: "#111111", borderBottom: "1px solid #2A2A2A" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center justify-between">
            <div>
              <span
                style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.2em" }}
                className="font-semibold uppercase block mb-2"
              >
                Submission Address
              </span>
              <address style={{ color: "#F5F5F5" }} className="not-italic text-sm leading-relaxed">
                Roz Clancy Casting &amp; Productions
                <br />
                206 Scotch Road, Glen Roc Plaza
                <br />
                Ewing Township, NJ 08628
              </address>
            </div>
            <div
              style={{
                background: "#1A1A1A",
                border: "1px solid #C9A84C",
                padding: "1rem 1.5rem",
              }}
            >
              <p style={{ color: "#C9A84C" }} className="text-xs font-semibold uppercase tracking-wide mb-1">
                Important Notice
              </p>
              <p style={{ color: "#9A9A9A" }} className="text-sm">
                Mail submissions only. No digital submissions unless personally invited.
                <br />
                No submissions November – December.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do / Don't */}
      <section style={{ background: "#0D0D0D" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
              className="font-semibold uppercase block mb-3"
            >
              Submission Guidelines
            </span>
            <h2
              style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              How to Submit Correctly
            </h2>
            <div style={{ width: "48px", height: "2px", background: "#C9A84C", margin: "0 auto" }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Do */}
            <div
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderTop: "3px solid #C9A84C",
                padding: "2rem",
              }}
            >
              <h3
                style={{ fontFamily: "var(--font-playfair)", color: "#C9A84C" }}
                className="text-xl font-bold mb-6"
              >
                ✓ Do This
              </h3>
              <ul className="space-y-4">
                {doList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ color: "#D0D0D0" }} className="text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div
              style={{
                background: "#1A1A1A",
                border: "1px solid #2A2A2A",
                borderTop: "3px solid #4A1A1A",
                padding: "2rem",
              }}
            >
              <h3
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                className="text-xl font-bold mb-6"
              >
                ✗ Don&apos;t Do This
              </h3>
              <ul className="space-y-4">
                {dontList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "#9A3A3A", flexShrink: 0, marginTop: "2px" }}>✗</span>
                    <span style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to include */}
      <section style={{ background: "#111111", borderTop: "1px solid #2A2A2A" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span
                style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
                className="font-semibold uppercase block mb-3"
              >
                Package Contents
              </span>
              <h2
                style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                className="text-3xl font-bold mb-4"
              >
                What to Include in Your Submission
              </h2>
              <div style={{ width: "40px", height: "2px", background: "#C9A84C" }} className="mb-6" />
              <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed">
                Your submission package should be professional and complete. An incomplete or
                improperly formatted submission may be discarded without consideration.
                Attention to detail in your submission reflects your attention to detail
                as a professional.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Professional Headshot",
                  body: "8×10, recent (within 6 months), clearly representing your current look. Glued — not stapled — to your resume.",
                },
                {
                  num: "02",
                  title: "Resume",
                  body: "Acting or modeling resume listing experience, training, skills, height, weight, and contact information. Union status clearly marked.",
                },
                {
                  num: "03",
                  title: "SAG-AFTRA Status",
                  body: "Mark your union status on the outside of the envelope. Non-union talent is accepted; this information simply helps with project matching.",
                },
                {
                  num: "04",
                  title: "Return Envelope (Optional)",
                  body: "If you want your materials returned, include a self-addressed, stamped envelope of sufficient size.",
                },
                {
                  num: "05",
                  title: "Brief Cover Letter (If Invited)",
                  body: "One page maximum. Reference your invitation or any prior correspondence. No cold cover letters.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  style={{
                    background: "#1A1A1A",
                    border: "1px solid #2A2A2A",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    gap: "1.25rem",
                  }}
                >
                  <span
                    style={{ fontFamily: "var(--font-playfair)", color: "#C9A84C", fontSize: "20px", fontWeight: 700, flexShrink: 0, lineHeight: "1.4" }}
                  >
                    {num}
                  </span>
                  <div>
                    <h3 style={{ color: "#F5F5F5" }} className="text-sm font-semibold mb-1">
                      {title}
                    </h3>
                    <p style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid #2A2A2A" }} className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span
              style={{ color: "#C9A84C", letterSpacing: "0.2em", fontSize: "11px" }}
              className="font-semibold uppercase block mb-3"
            >
              FAQ
            </span>
            <h2
              style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Common Questions
            </h2>
            <div style={{ width: "48px", height: "2px", background: "#C9A84C", margin: "0 auto" }} />
          </div>

          <div className="space-y-4">
            {faq.map(({ q, a }) => (
              <div
                key={q}
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                  className="text-lg font-semibold mb-3"
                >
                  {q}
                </h3>
                <p style={{ color: "#9A9A9A" }} className="text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111111", borderTop: "1px solid #2A2A2A" }} className="py-16">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Questions About the Process?
          </h2>
          <p style={{ color: "#9A9A9A" }} className="text-base leading-relaxed mb-8">
            For general questions not answered above, use our contact form. Please do
            not contact us to follow up on a pending submission — we will reach out if
            you&apos;re a match.
          </p>
          <Link
            href="/contact"
            style={{ background: "#C9A84C", color: "#0D0D0D" }}
            className="px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
