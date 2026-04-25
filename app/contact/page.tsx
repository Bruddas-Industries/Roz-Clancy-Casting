import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Roz Clancy Casting & Productions",
  description:
    "Contact Roz Clancy Casting & Productions. Located in Ewing Township, NJ. Serving NJ and PA. Casting submissions by mail only. General inquiries via contact form.",
};

export default function ContactPage() {
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
              Get In Touch
            </span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
          >
            Contact
            <br />
            <span style={{ color: "#C9A84C" }}>Roz Clancy Casting</span>
          </h1>
          <div style={{ width: "48px", height: "2px", background: "#C9A84C" }} className="mb-6" />
          <p style={{ color: "#9A9A9A" }} className="text-lg max-w-2xl leading-relaxed">
            For general inquiries, production casting needs, or questions about our training
            programs. Talent submissions are handled by mail only — see our submission guidelines.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section style={{ background: "#0D0D0D" }} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address */}
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                  className="font-semibold uppercase mb-3"
                >
                  Office Address
                </h3>
                <address style={{ color: "#D0D0D0" }} className="not-italic text-sm leading-relaxed">
                  Roz Clancy Casting &amp; Productions
                  <br />
                  206 Scotch Road
                  <br />
                  Glen Roc Plaza
                  <br />
                  Ewing Township, NJ 08628
                </address>
                <p style={{ color: "#9A9A9A" }} className="text-xs mt-3 italic">
                  No walk-in visits without a scheduled appointment.
                </p>
              </div>

              {/* Phone */}
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                  className="font-semibold uppercase mb-3"
                >
                  Phone
                </h3>
                <a
                  href="tel:6097376955"
                  style={{ color: "#F5F5F5" }}
                  className="text-sm block hover:text-[#C9A84C] transition-colors duration-200 mb-1"
                >
                  (609) 737-6955
                </a>
                <a
                  href="tel:9175281225"
                  style={{ color: "#9A9A9A" }}
                  className="text-sm block hover:text-[#C9A84C] transition-colors duration-200"
                >
                  (917) 528-1225
                </a>
                <p style={{ color: "#9A9A9A" }} className="text-xs mt-3 italic">
                  Please do not call to follow up on submissions.
                </p>
              </div>

              {/* Email */}
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                  className="font-semibold uppercase mb-3"
                >
                  Email
                </h3>
                <a
                  href="mailto:rozclancy@hotmail.com"
                  style={{ color: "#F5F5F5" }}
                  className="text-sm hover:text-[#C9A84C] transition-colors duration-200"
                >
                  rozclancy@hotmail.com
                </a>
                <p style={{ color: "#9A9A9A" }} className="text-xs mt-3 italic">
                  For general inquiries only. Submissions by mail only.
                </p>
              </div>

              {/* Social */}
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "0.15em" }}
                  className="font-semibold uppercase mb-3"
                >
                  Follow Us
                </h3>
                <a
                  href="https://www.facebook.com/RozClancyCastingProductions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#D0D0D0" }}
                  className="flex items-center gap-2 text-sm hover:text-[#C9A84C] transition-colors duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Roz Clancy Casting &amp; Productions
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2A2A2A",
                  padding: "2.5rem",
                }}
              >
                <h2
                  style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
                  className="text-2xl font-bold mb-2"
                >
                  Send a General Inquiry
                </h2>
                <p style={{ color: "#9A9A9A" }} className="text-sm mb-8">
                  This form is for general questions and production inquiries only.
                  Talent submissions must be sent by mail — do not use this form to submit for casting.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                        className="block uppercase font-semibold mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        style={{
                          background: "#0D0D0D",
                          border: "1px solid #2A2A2A",
                          color: "#F5F5F5",
                          width: "100%",
                          padding: "12px 16px",
                          fontSize: "14px",
                          outline: "none",
                        }}
                        className="focus:border-[#C9A84C] transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                        className="block uppercase font-semibold mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        style={{
                          background: "#0D0D0D",
                          border: "1px solid #2A2A2A",
                          color: "#F5F5F5",
                          width: "100%",
                          padding: "12px 16px",
                          fontSize: "14px",
                          outline: "none",
                        }}
                        className="focus:border-[#C9A84C] transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                      className="block uppercase font-semibold mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      style={{
                        background: "#0D0D0D",
                        border: "1px solid #2A2A2A",
                        color: "#F5F5F5",
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                      className="focus:border-[#C9A84C] transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                      className="block uppercase font-semibold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      style={{
                        background: "#0D0D0D",
                        border: "1px solid #2A2A2A",
                        color: "#F5F5F5",
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                      className="focus:border-[#C9A84C] transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                      className="block uppercase font-semibold mb-2"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      style={{
                        background: "#0D0D0D",
                        border: "1px solid #2A2A2A",
                        color: "#F5F5F5",
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "14px",
                        outline: "none",
                      }}
                      className="focus:border-[#C9A84C] transition-colors duration-200"
                    >
                      <option value="">Select an inquiry type…</option>
                      <option value="production">Production / Casting Inquiry</option>
                      <option value="training">Acting & Modeling Training</option>
                      <option value="production-services">Production Services</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      style={{ color: "#9A9A9A", fontSize: "11px", letterSpacing: "0.1em" }}
                      className="block uppercase font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      style={{
                        background: "#0D0D0D",
                        border: "1px solid #2A2A2A",
                        color: "#F5F5F5",
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: "14px",
                        outline: "none",
                        resize: "vertical",
                      }}
                      className="focus:border-[#C9A84C] transition-colors duration-200"
                    />
                  </div>

                  <p style={{ color: "#9A9A9A" }} className="text-xs italic">
                    * This form does not accept talent submissions. To submit for casting,
                    see our{" "}
                    <a
                      href="/talent-submission"
                      style={{ color: "#C9A84C" }}
                      className="hover:underline"
                    >
                      submission guidelines
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    style={{ background: "#C9A84C", color: "#0D0D0D" }}
                    className="w-full py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#E8C97A] transition-colors duration-200"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section style={{ background: "#0D0D0D", borderTop: "1px solid #2A2A2A" }}>
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h2
            style={{ fontFamily: "var(--font-playfair)", color: "#F5F5F5" }}
            className="text-xl font-bold mb-4"
          >
            Find Us in Ewing Township, NJ
          </h2>
          <div
            style={{
              background: "#1A1A1A",
              border: "1px solid #2A2A2A",
              overflow: "hidden",
            }}
          >
            <iframe
              title="Roz Clancy Casting location map"
              src="https://maps.google.com/maps?q=206+Scotch+Road+Ewing+Township+NJ+08628&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block", filter: "grayscale(80%) invert(10%) contrast(90%)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
