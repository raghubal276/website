export default function Contact() {
  return (
    <section className="relative min-h-screen">
      {/* Top Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#081a2f]"></div>
      {/* Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center text-white lg:text-white">
          <h1 className="text-5xl font-bold mb-6">Contact us</h1>

          <p className="text-lg text-gray-300 mb-8 max-w-md lg:text-white-700">
            Please fill out this form and our team will be in touch within one business day.
          </p>

          <div className="w-16 h-1 bg-yellow-400 mb-8" />

          <p className="text-gray-300 mb-12 lg:text-white-700">
            For general queries or questions, please reach out to us at{" "}
            <span className="text-yellow-400 font-medium">help@zokbee.com</span>.
          </p>

          {/* Support box */}
          <div className="bg-white text-black rounded-lg p-8 max-w-md">
            <h3 className="text-xl font-semibold mb-4">Support</h3>

            <p className="mb-2">
              Email us at{" "}
              <span className="text-blue-600 font-medium">help@zokbee.com</span>
            </p>

            <p className="text-sm text-gray-600 mb-6">
              Support Hours:<br />
              Monday – Friday 9am–5pm IND
            </p>

            <button className="border border-blue-500 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
              Email us
            </button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white text-black rounded-xl p-10 shadow-lg mt-10">
  <form className="space-y-6">
    {/* form fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">First name*</label>
        <input className="w-full border rounded-md px-4 py-2" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Last name*</label>
        <input className="w-full border rounded-md px-4 py-2" />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Phone number</label>
      <input className="w-full border rounded-md px-4 py-2" />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Business email address*</label>
      <input className="w-full border rounded-md px-4 py-2" />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Subject*</label>
      <textarea 
        className="w-full border rounded-md px-4 py-2 h-32 resize-none" 
        placeholder="Type your subject or message here..."
      />
    </div>

    <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition">
      Submit
    </button>
  </form>
</div>

      </div>
    </section>
  );
}
