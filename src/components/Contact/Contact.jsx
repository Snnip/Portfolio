import { Link } from "react-router-dom";

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
    <div className="flex flex-col justify-center h-screen w-full p-5 md:p-10 ">
      <section>
        <h2 className="text-5xl md:text-8xl uppercase">Contact me.</h2>
        <p className="md:text-lg mt-4 md:mt-10 leading-loose">
          If you are interested in contacting me, so I can offer you my
          willingness to learn and my skills, I provide you with an email, and
          my social networks.
        </p>
        <br />
        <p>
          Email:{" "}
          <a
            onClick={handleEmailClick}
            className="underline underline-offset-2 decoration-2 decoration-sky-500 hover:decoration-blue-800 cursor-pointer">
            sanpb10@gmail.com
          </a>
        </p>
        <p>
          On the Internet:{" "}
          <a
            href="https://www.linkedin.com/in/sandra-polb/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-2 decoration-sky-500 hover:decoration-blue-800 cursor-pointer">
            Linkedin
          </a>{" "}
          /{" "}
          <a
            href="https://github.com/Snnip"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-2 decoration-sky-500 hover:decoration-blue-800 cursor-pointer">
            GitHub
          </a>
        </p>
      </section>

      <Link to="/" className="flex justify-center mt-28">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="animate-bounce w-8 h-8 stroke-cyan-500 ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </button>
      </Link>

      <footer className="text-center absolute bottom-0 right-0 bg-sky-800 text-white rounded-full w-20">
        <p>©️ 2023</p>
      </footer>
    </div>
  );
};

export default Contact;
