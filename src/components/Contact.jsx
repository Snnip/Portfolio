import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  const handleEmailClick = (e) => {
    e.preventDefault();

    const emailAddress = "sanpb10@gmail.com";
    const success = openMail(emailAddress);
    if (!success) {
      <alert>
        Could not open the email. Please manually copy the email address.
      </alert>;
    }
  };

  const openMail = (emailAddress) => {
    try {
      window.location.href = `mailto:${emailAddress}`;
      return true;
    } catch (error) {
      console.error("Error opening email:", error);
      return false;
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen w-full bg-sky-900 text-slate-300 p-10 md:p-20">
      <header>
        <Link to="/" className="right-10 top-10 absolute">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-slate-300 ">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
        </Link>
        <h2 className="flex flex-row text-7xl md:text-9xl uppercase">
          <p>Hello</p>
          <p className="text-lime-500">.</p>
        </h2>
      </header>

      <div>
        <p className="md:w-1/2 md:text-lg mt-4 md:mt-10 leading-loose">
          If you are interested in contacting me, so I can offer you my
          willingness to learn and my skills, I provide you with an email, and
          my social networks.
        </p>
        <br />
        <p>
          Email:{" "}
          <a
            onClick={handleEmailClick}
            className="underline underline-offset-2 decoration-2 decoration-lime-500 hover:decoration-white cursor-pointer">
            sanpb10@gmail.com
          </a>
        </p>
        <p>
          On the Internet:{" "}
          <a
            href="https://www.linkedin.com/in/sandra-polb/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-2 decoration-lime-500  hover:decoration-white cursor-pointer">
            Linkedin
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/Snnip"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-2 decoration-lime-500  hover:decoration-white cursor-pointer">
            GitHub
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
