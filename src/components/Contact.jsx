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
    <div
      id="contact"
      className="flex flex-col justify-center min-h-screen w-full  bg-yellow-400 p-10 md:p-20 dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="flex flex-row justify-center text-5xl md:text-9xl uppercase">
          <p className="text-white">Contact</p>
          <p className="text-blue-500">.</p>
        </h2>
      </header>

      <div className="flex flex-col justify-center items-center text-center">
        <p className="w-2/3 md:text-lg mt-4 md:mt-10 leading-loose mb-20">
          If you are interested in contacting me, so I can offer you my
          willingness to learn and my skills, I leave here my email address, and
          my social networks.
        </p>

        <br />

        <p>
          Email:{" "}
          <a
            onClick={handleEmailClick}
            className="underline underline-offset-2 decoration-2 decoration-cyan-500 hover:decoration-white cursor-pointer">
            sanpb10@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
