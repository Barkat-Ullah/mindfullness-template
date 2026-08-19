import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-white px-6 md:px-[135px] py-[100px] md:py-[160px]">
      <div className="flex flex-col items-center text-center max-w-[640px] gap-5">
        <span className="font-sans text-[14px] font-medium uppercase tracking-[0.2em] text-[#85FA6D]">
          Contact
        </span>
        <h1 className="font-serif text-[36px] md:text-[52px] font-semibold leading-[1.1] tracking-[-0.8px] text-[#093600]">
          Get in Touch
        </h1>
        <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[26px] tracking-[-0.18px] text-[#093600] opacity-80">
          Have a question about our programs, pricing or coaching? Our team is
          ready to help you start your mind and body transformation.
        </p>
        <Link
          href="/"
          className="mt-2 px-7 py-3.5 rounded-full bg-[#093600] text-white font-sans text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-[#85FA6D] hover:text-[#0f1a0e]"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
