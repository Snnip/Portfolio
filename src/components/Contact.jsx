const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col min-h-screen w-full bg-yellow-400 text-black p-10 md:p-20 dark:text-slate-200 dark:bg-slate-900">
      <header>
        <h2 className="flex flex-row justify-center text-5xl sm:text-7xl md:text-9xl mt-10 uppercase">
          <p className="text-white">Contact</p>
          <p className="text-blue-500">.</p>
        </h2>
      </header>

      <div className="flex flex-col justify-center items-center text-center mt-10">
        <p className="w-2/3 md:text-lg mt-4 md:mt-10 leading-loose mb-20">
          If you are interested in contacting me, so I can offer you my
          willingness to learn and my skills, I leave here my email address, and
          my social networks.
        </p>

        <form
          netlify
          className="bg-slate-800 max-w-md w-full mx-auto p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-white font-semibold md-2"
              htmlFor="name">
              Your Name
            </label>
            <input
              name="name"
              placeholder="Name"
              className="w-full px-3 py-2 border rounded-lg text-white bg-slate-800 focus:outline-none focus:border-blue-500"
              required
              type="text"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white font-semibold md-2"
              htmlFor="email">
              Your Email
            </label>
            <input
              name="email"
              placeholder="email@example.com"
              className="w-full px-3 py-2 border rounded-lg text-white bg-slate-800 focus:outline-none focus:border-blue-500"
              required
              type="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-white font-semibold md-2"
              htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-3 py-2 border rounded-lg text-white bg-slate-800 focus:outline-none focus:border-blue-500"
              required
              type="text"
            />
          </div>

          <div>
            <button
              type="submit"
              className="text-white rounded-full w-32 sm:w-48 py-2 text-center mt-6 text-lg transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300 dark:hover:bg-yellow-500">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
